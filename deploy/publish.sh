#!/usr/bin/env bash
# Siteyi derleyip GitHub Pages yayın dalına (gh-pages) iter.
#
#   ./deploy/publish.sh
#
# Adres, origin uzak deposundan türetilir: brandadverts/gamb3 → /gamb3/ öneki ve
# https://brandadverts.github.io/gamb3 kanonik adresi. Kaynak kod main dalında kalır;
# bu betik yalnızca derlenmiş dist/ çıktısını yayın dalına gönderir.
#
# Not: token'da `workflow` yetkisi olursa deploy/pages.yml dosyasını
# .github/workflows/ altına taşıyıp bu adımı GitHub Actions'a bırakabilirsiniz.
set -euo pipefail

cd "$(dirname "$0")/.."

# https://github.com/sahip/depo.git ve git@github.com:sahip/depo.git biçimlerinin ikisi de çözülür.
remote=$(git remote get-url origin)
slug=${remote%.git}
repo=${slug##*/}
rest=${slug%/*}
owner=${rest##*[:/]}

base="/$repo/"
site="https://$owner.github.io/$repo"

echo "Yayın hedefi: $site"
BASE_PATH="$base" SITE_URL="$site" pnpm build

work=$(mktemp -d)
trap 'rm -rf "$work"' EXIT
cp -R dist/. "$work"/
touch "$work/.nojekyll"   # Jekyll alt çizgiyle başlayan dosyaları atlamasın

cd "$work"
git init -q -b gh-pages
git add -A
git commit -q -m "deploy: $(date -u '+%Y-%m-%d %H:%M UTC') derlemesi"
git push -q -f "$remote" gh-pages

echo "Yayınlandı: $site/"
