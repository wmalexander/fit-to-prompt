#!/bin/bash
# Finishes the S3 mirror for issue #85 (2026-08-01) once AWS SSO is refreshed.
# The issue is ALREADY published and emailed. This only mirrors files to S3.
#
#   aws sso login --profile wfu-sso
#   ./AI\ Newsletter/finish-s3-2026-08-01.sh
set -e
cd "$(dirname "$0")/.."

aws sts get-caller-identity >/dev/null || { echo "AWS SSO still expired. Run: aws sso login --profile wfu-sso"; exit 1; }

aws s3 cp "AI Newsletter/issues/2026-08-01.html" \
  "s3://wfu-cer-ait-ua-internal/wm/ai-newsletter/issues/2026-08-01.html" \
  --acl public-read --content-type "text/html"

aws s3 cp "AI Newsletter/issues/assets/2026-08-01-cartoon.png" \
  "s3://wfu-cer-ait-ua-internal/wm/ai-newsletter/issues/assets/2026-08-01-cartoon.png" \
  --acl public-read --content-type "image/png"

aws s3 cp "AI Newsletter/issues/assets/2026-08-01-podcast.mp3" \
  "s3://wfu-cer-ait-ua-internal/wm/ai-newsletter/issues/assets/2026-08-01-podcast.mp3" \
  --acl public-read --content-type "audio/mpeg"

aws s3 cp "AI Newsletter/issues/2026-07-31.html" \
  "s3://wfu-cer-ait-ua-internal/wm/ai-newsletter/issues/2026-07-31.html" \
  --acl public-read --content-type "text/html"

aws s3 cp "AI Newsletter/issues/assets/2026-07-31-cartoon.png" \
  "s3://wfu-cer-ait-ua-internal/wm/ai-newsletter/issues/assets/2026-07-31-cartoon.png" \
  --acl public-read --content-type "image/png"

aws s3 cp "WFU Study Guides/wfu-study-guide-book/data/newsletter-data.js" \
  "s3://wfu-cer-ait-ua-internal/wm/study-guides/data/newsletter-data.js" \
  --acl public-read --content-type "application/javascript"

echo "S3 mirror complete for issue #85."
