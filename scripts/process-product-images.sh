#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SOURCE_ROOT="$ROOT_DIR/assets/Pictures"
PUBLIC_ROOT="$ROOT_DIR/public/images"

mkdir -p \
  "$PUBLIC_ROOT/products/cartridges" \
  "$PUBLIC_ROOT/products/bags" \
  "$PUBLIC_ROOT/products/housings" \
  "$PUBLIC_ROOT/company/workshop"

process_group() {
  local source_dir="$1"
  local target_dir="$2"
  shift 2
  local target_names=("$@")

  local source_files=()
  while IFS= read -r -d '' file; do
    source_files+=("$file")
  done < <(
    find "$source_dir" -maxdepth 1 -type f \
      ! -name '.DS_Store' \
      ! -iname 'interface diagram.jpg' \
      -print0 | sort -zV
  )

  if [[ "${#source_files[@]}" -ne "${#target_names[@]}" ]]; then
    echo "Expected ${#target_names[@]} files in $source_dir but found ${#source_files[@]}" >&2
    exit 1
  fi

  for i in "${!source_files[@]}"; do
    local src="${source_files[$i]}"
    local base="${target_names[$i]}"
    local ext
    ext="$(printf '%s' "${src##*.}" | tr '[:upper:]' '[:lower:]')"

    for size in 400 1200; do
      local jpg_target="$target_dir/${base}-${size}.jpg"
      local webp_target="$target_dir/${base}-${size}.webp"

      magick "$src" \
        -auto-orient \
        -strip \
        -background white \
        -alpha remove \
        -alpha off \
        -resize "${size}x${size}>" \
        -sampling-factor 4:2:0 \
        -interlace Plane \
        -quality 72 \
        "$jpg_target"

      magick "$src" \
        -auto-orient \
        -strip \
        -background white \
        -alpha remove \
        -alpha off \
        -resize "${size}x${size}>" \
        -define webp:method=6 \
        -quality 78 \
        "$webp_target"
    done
  done
}

cartridge_names=(
  cartridge-pleated-01
  cartridge-pleated-02
  cartridge-pleated-03
  cartridge-pleated-04
  cartridge-pleated-05
  cartridge-pleated-06
  cartridge-pleated-07
  cartridge-pleated-08
  cartridge-pleated-09
  cartridge-pleated-10
  cartridge-pleated-11
  cartridge-pleated-12
  cartridge-pleated-13
  cartridge-pleated-14
  cartridge-pleated-15
  cartridge-pleated-16
  cartridge-pleated-17
  cartridge-pleated-18
  cartridge-pleated-19
  cartridge-pleated-20
)

bag_names=(
  bag-multilayer-01
  bag-stainless-ring-01
  bag-heat-welded-01
  bag-welded-plastic-ring-01
  bag-pp-ring-01
  bag-multilayer-bottom-01
  bag-pp-cone-bottom-01
  bag-multilayer-plastic-01
  bag-pp-stainless-ring-01
  bag-sewn-ss-ring-01
  bag-heat-welded-02
  bag-size-12-01
  bag-size-1-sewn-01
  bag-mesh-01
  bag-mesh-02
  bag-plastic-ring-01
  bag-sewn-ss-ring-02
  bag-mesh-03
  bag-mesh-04
  bag-mesh-05
  bag-sewn-ss-ring-03
  bag-sewn-ss-ring-04
)

housing_names=(
  housing-single-bag-polished-01
  housing-multibag-01
  housing-single-bag-sandblast-01
  housing-cartridge-01
  housing-single-bag-polished-02
  housing-single-bag-01
  housing-single-cartridge-01
)

workshop_names=(
  workshop-bag-assembly-01
  workshop-bag-assembly-02
  workshop-carding-machine-01
  workshop-production-01
  workshop-production-02
  workshop-heat-setting-01
  workshop-filter-cloth-roll-01
  workshop-housing-assembly-01
)

process_group "$SOURCE_ROOT/filter cartridge" "$PUBLIC_ROOT/products/cartridges" "${cartridge_names[@]}"
process_group "$SOURCE_ROOT/filter bag" "$PUBLIC_ROOT/products/bags" "${bag_names[@]}"
process_group "$SOURCE_ROOT/filter housing" "$PUBLIC_ROOT/products/housings" "${housing_names[@]}"
process_group "$SOURCE_ROOT/workshop" "$PUBLIC_ROOT/company/workshop" "${workshop_names[@]}"

echo "Product images processed into $PUBLIC_ROOT"
