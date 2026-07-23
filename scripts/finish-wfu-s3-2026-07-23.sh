#!/bin/bash
# Finish deferred WFU S3 uploads for issue #80 (2026-07-23).
# The newsletter itself already shipped via fittoprompt.com (git push) and the
# Buttondown email was sent. These uploads only refresh the WFU-S3-hosted
# study-guide BOOK and the fittoprompt archive index (which reads newsletter-data.js
# from WFU S3). Run AFTER `aws sso login --profile wfu-sso`.
set -e
export AWS_PROFILE=wfu-sso
cd "$(dirname "$0")/../.."   # -> StudyGuides repo root

echo "Verifying SSO..."
aws sts get-caller-identity >/dev/null

BUCKET="s3://wfu-cer-ait-ua-internal"
SG="WFU Study Guides"

echo "1/4 Uploading 6 study guides to WFU S3 video-study-guides..."
for slug in \
  how-to-actually-run-your-coding-agent-safely-study \
  gpt-6-goes-rogue-the-huggingface-incident-study \
  it-begins-an-ai-tried-to-escape-the-lab-study \
  openai-hacked-huggingface-study \
  open-weight-ai-hit-2-8-trillion-parameters-study \
  the-ai-slop-problem-substack-ceo-interview-study; do
  aws s3 cp "$SG/$slug/$slug.html" \
    "$BUCKET/wm/video-study-guides/$slug.html" \
    --acl public-read --content-type "text/html"
done

echo "2/4 Uploading guides-data.js (book data)..."
aws s3 cp "$SG/wfu-study-guide-book/data/guides-data.js" \
  "$BUCKET/wm/study-guides/data/guides-data.js" \
  --acl public-read --content-type "application/javascript"

echo "3/4 Uploading newsletter-data.js (fittoprompt archive index + book)..."
aws s3 cp "$SG/wfu-study-guide-book/data/newsletter-data.js" \
  "$BUCKET/wm/study-guides/data/newsletter-data.js" \
  --acl public-read --content-type "application/javascript"

echo "4/4 (optional) Mirroring cartoon + podcast to WFU S3 ai-newsletter assets..."
aws s3 cp "AI Newsletter/issues/assets/2026-07-23-cartoon.png" \
  "$BUCKET/wm/ai-newsletter/issues/assets/2026-07-23-cartoon.png" \
  --acl public-read --content-type "image/png" || true
aws s3 cp "AI Newsletter/issues/assets/2026-07-23-podcast.mp3" \
  "$BUCKET/wm/ai-newsletter/issues/assets/2026-07-23-podcast.mp3" \
  --acl public-read --content-type "audio/mpeg" || true

echo "Done. Issue #80 book/index data refreshed on WFU S3."
