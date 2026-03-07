# AI the News That's Fit to Prompt

A curated daily AI news digest. The stories that matter, minus the hype.

**Live site:** [fittoprompt.com](https://fittoprompt.com)

## What's here

This repo is a GitHub Pages site serving the newsletter archive:

- `index.html` — Landing page with subscribe form and issue archive
- `issues/` — Individual newsletter issues (one HTML file per day)
- `issues/assets/` — Issue images (cartoons, etc.)
- `assets/` — Site-wide assets (favicons)
- `manifest.json` + `sw.js` — PWA support

## Building issues

Issues are built using the `/build-newsletter` slash command in Claude Code from the parent [StudyGuides](https://github.com/wmalexander/study-guides) repo, where this repo is included as a submodule.

The workflow:
1. `/check-sources` — scans 80+ AI news sources for new content
2. `/build-newsletter` — generates a newspaper-style HTML issue from approved URLs

## Distribution

- **Web:** Hosted on GitHub Pages at [fittoprompt.com](https://fittoprompt.com)
- **Email:** Sent via [Buttondown](https://buttondown.com/fittoprompt) with a teaser email linking to the full issue

## Newsletter data

Issue metadata lives in the parent repo at `WFU Study Guides/wfu-study-guide-book/data/newsletter-data.js`.
