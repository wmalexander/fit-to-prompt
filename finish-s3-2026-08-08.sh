#!/bin/bash
# Catch-up S3 uploads for issue #92 (2026-08-08).
# The 2026-08-08 pipeline ran while the WFU SSO token was expired (same as
# 2026-08-07), so every S3 upload was skipped. The issue published fine via
# GitHub Pages (fittoprompt.com), but these S3 objects are still stale.
#
# No podcast this issue: the ElevenLabs API key in ~/.config/wm/config.yaml is
# a key ID rather than an sk_ key, so TTS generation failed. Fix that key
# before the next run if you want audio back.
#
# Run `aws sso login --profile wfu-sso` (needs Duo) first, then run this.
set -euo pipefail
cd "$(dirname "$0")/.."

aws s3 cp "AI Newsletter/issues/2026-08-08.html" \
  "s3://wfu-cer-ait-ua-internal/wm/ai-newsletter/issues/2026-08-08.html" \
  --acl public-read --content-type "text/html"

aws s3 cp "AI Newsletter/issues/assets/2026-08-08-cartoon.png" \
  "s3://wfu-cer-ait-ua-internal/wm/ai-newsletter/issues/assets/2026-08-08-cartoon.png" \
  --acl public-read --content-type "image/png"

# newsletter-data.js drives the fittoprompt.com archive index, which reads it
# from S3. Until this uploads, issue #92 will not appear in the archive list.
aws s3 cp "WFU Study Guides/wfu-study-guide-book/data/newsletter-data.js" \
  "s3://wfu-cer-ait-ua-internal/wm/study-guides/data/newsletter-data.js" \
  --acl public-read --content-type "application/javascript"

echo "Catch-up uploads for 2026-08-08 complete."
