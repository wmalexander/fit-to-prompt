#!/bin/bash
# Backfill S3 for issue #99 once AWS SSO + DNS are healthy again.
# Run: aws sso login   (then this script)
set -e
R="/Users/alexandw/localdev/StudyGuides"
aws s3 cp "$R/AI Newsletter/issues/2026-08-19.html" \
  "s3://wfu-cer-ait-ua-internal/wm/ai-newsletter/issues/2026-08-19.html" --acl public-read --content-type "text/html"
aws s3 cp "$R/AI Newsletter/issues/assets/2026-08-19-cartoon.png" \
  "s3://wfu-cer-ait-ua-internal/wm/ai-newsletter/issues/assets/2026-08-19-cartoon.png" --acl public-read --content-type "image/png"
aws s3 cp "$R/WFU Study Guides/wfu-study-guide-book/data/newsletter-data.js" \
  "s3://wfu-cer-ait-ua-internal/wm/study-guides/data/newsletter-data.js" --acl public-read --content-type "application/javascript"
echo "S3 backfill for 2026-08-19 complete."
