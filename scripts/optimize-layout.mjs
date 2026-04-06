#!/usr/bin/env node
/**
 * Newsletter Layout Optimizer
 *
 * Takes a JSON array of story metadata on stdin, predicts card heights,
 * and outputs an optimized ordering that minimizes row height imbalance
 * in a 3-column CSS grid.
 *
 * Input format (JSON array):
 *   [{ "id": 0, "tier": "feature", "title": "...", "description": "...",
 *      "hasImage": true, "isVideo": false, "span": 1, "kicker": "..." }, ...]
 *
 * Output format (JSON):
 *   { "order": [id, id, ...], "rows": [...], "metrics": {...} }
 *
 * Span values: 1 = story-item, 2 = story-span-2, 3 = story-wide
 * Items with span=3 (wide) always get their own row.
 * Items with span=2 share a row with one span=1 item.
 */

import { readFileSync } from "fs";

const COLS = 3;
const COL_WIDTH = 350; // px, approximate column width at 1080px container

// Height estimation constants (px)
const IMAGE_HEIGHT = 200; // 16:9 at ~350px
const VIDEO_THUMB_HEIGHT = 200;
const CARTOON_HEIGHT = 250;
const KICKER_HEIGHT = 18;
const BYLINE_HEIGHT = 20;
const CARD_PADDING = 32; // top + bottom padding + border
const HEADLINE_LINE_HEIGHT = 24;
const DESC_LINE_HEIGHT = 22;
const WIRE_ITEM_HEIGHT = 48; // per wire brief item

// Character widths (rough averages for Inter/Source Serif at typical sizes)
const HEADLINE_CHARS_PER_LINE = 28; // bold Inter at ~1.2rem in 350px
const DESC_CHARS_PER_LINE = 42; // Source Serif at 0.95rem in 350px
const HEADLINE_SPAN2_CHARS_PER_LINE = 38; // wider column in span-2

function estimateTextLines(text, charsPerLine) {
  if (!text) return 0;
  const words = text.split(/\s+/);
  let lines = 1;
  let lineLen = 0;
  for (const word of words) {
    if (lineLen + word.length + 1 > charsPerLine && lineLen > 0) {
      lines++;
      lineLen = word.length;
    } else {
      lineLen += (lineLen > 0 ? 1 : 0) + word.length;
    }
  }
  return lines;
}

function estimateHeight(item) {
  const span = item.span || 1;
  const headlineCharsPerLine =
    span >= 2 ? HEADLINE_SPAN2_CHARS_PER_LINE : HEADLINE_CHARS_PER_LINE;
  let h = CARD_PADDING + KICKER_HEIGHT + BYLINE_HEIGHT;
  const headlineLines = estimateTextLines(item.title, headlineCharsPerLine);
  h += headlineLines * HEADLINE_LINE_HEIGHT;
  if (item.hasImage || item.isVideo) {
    h += item.isCartoon ? CARTOON_HEIGHT : item.isVideo ? VIDEO_THUMB_HEIGHT : IMAGE_HEIGHT;
  }
  if (item.description) {
    const descLines = estimateTextLines(item.description, DESC_CHARS_PER_LINE);
    h += descLines * DESC_LINE_HEIGHT;
  }
  if (item.wireCount) {
    h += item.wireCount * WIRE_ITEM_HEIGHT + 30; // section label
  }
  if (item.isPuzzle) {
    h += 450; // puzzles are roughly this tall
  }
  item._estimatedHeight = Math.round(h);
  return item._estimatedHeight;
}

function splitWireBriefs(items) {
  const result = [];
  for (const item of items) {
    if (item.wireCount && item.wireCount > 10) {
      const half = Math.ceil(item.wireCount / 2);
      result.push({ ...item, id: item.id, wireCount: half, _split: "a", _estimatedHeight: undefined });
      result.push({ ...item, id: `${item.id}_b`, wireCount: item.wireCount - half, _split: "b", _estimatedHeight: undefined });
    } else {
      result.push(item);
    }
  }
  return result;
}

function buildRows(inputItems) {
  const items = splitWireBriefs(inputItems);
  const rows = [];
  const span1Items = [];
  const span2Items = [];
  const span3Items = [];
  for (const item of items) {
    estimateHeight(item);
    if (item.span === 3) span3Items.push(item);
    else if (item.span === 2) span2Items.push(item);
    else span1Items.push(item);
  }
  // Sort span-1 items by estimated height descending for better packing
  span1Items.sort((a, b) => b._estimatedHeight - a._estimatedHeight);
  // Place wide items first (they get their own row)
  for (const item of span3Items) {
    rows.push({ items: [item], cols: COLS, maxHeight: item._estimatedHeight });
  }
  // Place span-2 items, each paired with a span-1 buddy
  for (const s2 of span2Items) {
    let bestBuddy = null;
    let bestImbalance = Infinity;
    for (let i = 0; i < span1Items.length; i++) {
      const imbalance = Math.abs(s2._estimatedHeight - span1Items[i]._estimatedHeight);
      if (imbalance < bestImbalance) {
        bestImbalance = imbalance;
        bestBuddy = i;
      }
    }
    if (bestBuddy !== null) {
      const buddy = span1Items.splice(bestBuddy, 1)[0];
      rows.push({
        items: [s2, buddy],
        cols: COLS,
        maxHeight: Math.max(s2._estimatedHeight, buddy._estimatedHeight),
        imbalance: Math.abs(s2._estimatedHeight - buddy._estimatedHeight),
      });
    } else {
      rows.push({ items: [s2], cols: 2, maxHeight: s2._estimatedHeight });
    }
  }
  // Pack remaining span-1 items into 3-column rows using best-fit decreasing
  const packed = packThreeCol(span1Items);
  rows.push(...packed);
  return rows;
}

function packThreeCol(items) {
  // Items already sorted by height descending
  const rows = [];
  const used = new Set();
  for (let i = 0; i < items.length; i++) {
    if (used.has(i)) continue;
    const row = [items[i]];
    used.add(i);
    const targetHeight = items[i]._estimatedHeight;
    // Find 2 more items closest in height to the first
    const candidates = [];
    for (let j = i + 1; j < items.length; j++) {
      if (used.has(j)) continue;
      candidates.push({
        idx: j,
        diff: Math.abs(items[j]._estimatedHeight - targetHeight),
      });
    }
    candidates.sort((a, b) => a.diff - b.diff);
    for (const c of candidates.slice(0, 2)) {
      row.push(items[c.idx]);
      used.add(c.idx);
    }
    const heights = row.map((r) => r._estimatedHeight);
    rows.push({
      items: row,
      cols: row.length,
      maxHeight: Math.max(...heights),
      imbalance: Math.max(...heights) - Math.min(...heights),
    });
  }
  return rows;
}

function computeMetrics(rows) {
  const imbalances = rows.filter((r) => r.imbalance != null).map((r) => r.imbalance);
  const maxImbalance = imbalances.length ? Math.max(...imbalances) : 0;
  const avgImbalance = imbalances.length
    ? Math.round(imbalances.reduce((a, b) => a + b, 0) / imbalances.length)
    : 0;
  const totalHeight = rows.reduce((sum, r) => sum + r.maxHeight, 0);
  const contentHeight = rows.reduce(
    (sum, r) => sum + r.items.reduce((s, i) => s + i._estimatedHeight, 0),
    0,
  );
  const wastedPx = totalHeight * COLS - contentHeight;
  return {
    rowCount: rows.length,
    maxImbalance,
    avgImbalance,
    totalHeight,
    wastedPx: Math.round(wastedPx),
  };
}

// Main
const input = readFileSync("/dev/stdin", "utf8");
const stories = JSON.parse(input);

// Estimate heights
for (const s of stories) estimateHeight(s);

// Build original order metrics (for comparison)
const originalRows = [];
let origBuf = [];
for (const s of stories) {
  if (s.span === 3) {
    if (origBuf.length) {
      while (origBuf.length) {
        const chunk = origBuf.splice(0, 3);
        const heights = chunk.map((c) => c._estimatedHeight);
        originalRows.push({
          items: chunk,
          cols: chunk.length,
          maxHeight: Math.max(...heights),
          imbalance: Math.max(...heights) - Math.min(...heights),
        });
      }
    }
    originalRows.push({ items: [s], cols: COLS, maxHeight: s._estimatedHeight });
  } else if (s.span === 2) {
    if (origBuf.length) {
      while (origBuf.length) {
        const chunk = origBuf.splice(0, 3);
        const heights = chunk.map((c) => c._estimatedHeight);
        originalRows.push({
          items: chunk,
          cols: chunk.length,
          maxHeight: Math.max(...heights),
          imbalance: Math.max(...heights) - Math.min(...heights),
        });
      }
    }
    originalRows.push({ items: [s], cols: 2, maxHeight: s._estimatedHeight });
  } else {
    origBuf.push(s);
  }
}
while (origBuf.length) {
  const chunk = origBuf.splice(0, 3);
  const heights = chunk.map((c) => c._estimatedHeight);
  originalRows.push({
    items: chunk,
    cols: chunk.length,
    maxHeight: Math.max(...heights),
    imbalance: Math.max(...heights) - Math.min(...heights),
  });
}

const originalMetrics = computeMetrics(originalRows);

// Build optimized layout
const optimizedRows = buildRows(stories);
const optimizedMetrics = computeMetrics(optimizedRows);

// Output
const order = optimizedRows.flatMap((r) => r.items.map((i) => i.id));
const rowDetails = optimizedRows.map((r) => ({
  ids: r.items.map((i) => i.id),
  heights: r.items.map((i) => i._estimatedHeight),
  maxHeight: r.maxHeight,
  imbalance: r.imbalance || 0,
}));

const result = {
  order,
  rows: rowDetails,
  original: originalMetrics,
  optimized: optimizedMetrics,
  improvement: {
    maxImbalanceReduction: originalMetrics.maxImbalance - optimizedMetrics.maxImbalance,
    avgImbalanceReduction: originalMetrics.avgImbalance - optimizedMetrics.avgImbalance,
    wastedPxReduction: originalMetrics.wastedPx - optimizedMetrics.wastedPx,
  },
};

console.log(JSON.stringify(result, null, 2));
