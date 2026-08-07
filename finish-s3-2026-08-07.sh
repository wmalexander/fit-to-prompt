#!/bin/bash
# Catch-up S3 uploads for issue #91 (2026-08-07).
# The 2026-08-07 pipeline ran while the WFU SSO token was expired, so every
# S3 upload was skipped. The issue itself published fine via GitHub Pages
# (fittoprompt.com), but these S3 objects are still stale.
#
# Run `aws sso login --profile wfu-sso` (needs Duo) first, then run this.
set -euo pipefail
cd "$(dirname "$0")/.."

aws s3 cp "AI Newsletter/issues/2026-08-07.html" \
  "s3://wfu-cer-ait-ua-internal/wm/ai-newsletter/issues/2026-08-07.html" \
  --acl public-read --content-type "text/html"

aws s3 cp "AI Newsletter/issues/assets/2026-08-07-cartoon.png" \
  "s3://wfu-cer-ait-ua-internal/wm/ai-newsletter/issues/assets/2026-08-07-cartoon.png" \
  --acl public-read --content-type "image/png"

aws s3 cp "AI Newsletter/issues/assets/2026-08-07-podcast.mp3" \
  "s3://wfu-cer-ait-ua-internal/wm/ai-newsletter/issues/assets/2026-08-07-podcast.mp3" \
  --acl public-read --content-type "audio/mpeg"

# newsletter-data.js drives the fittoprompt.com archive index, which reads it
# from S3. Until this uploads, issue #91 will not appear in the archive list.
aws s3 cp "WFU Study Guides/wfu-study-guide-book/data/newsletter-data.js" \
  "s3://wfu-cer-ait-ua-internal/wm/study-guides/data/newsletter-data.js" \
  --acl public-read --content-type "application/javascript"

aws s3 cp "WFU Study Guides/wfu-study-guide-book/data/guides-data.js" \
  "s3://wfu-cer-ait-ua-internal/wm/study-guides/data/guides-data.js" \
  --acl public-read --content-type "application/javascript"

aws s3 cp "WFU Study Guides/what-is-google-even-doing-study/what-is-google-even-doing-study.html" \
  "s3://wfu-cer-ait-ua-internal/wm/video-study-guides/what-is-google-even-doing-study.html" \
  --acl public-read --content-type "text/html"

aws s3 cp "WFU Study Guides/deepmind-just-changed-how-ai-sees-the-world-study/deepmind-just-changed-how-ai-sees-the-world-study.html" \
  "s3://wfu-cer-ait-ua-internal/wm/video-study-guides/deepmind-just-changed-how-ai-sees-the-world-study.html" \
  --acl public-read --content-type "text/html"

echo "Catch-up uploads for 2026-08-07 complete."
