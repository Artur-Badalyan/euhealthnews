#!/bin/bash

mkdir -p webp

for img in *; do
  [ -f "$img" ] || continue  # Только файлы, не папки

  extension="${img##*.}"
  filename="${img%.*}"

  # Приводим расширение к нижнему регистру
  ext_lc=$(echo "$extension" | tr '[:upper:]' '[:lower:]')

  case "$ext_lc" in
    jpg|jpeg|png)
      echo "🖼 Конвертирую $img → webp/${filename}.webp"
      convert "$img" -quality 80 "webp/${filename}.webp"
      ;;
    *)
      echo "📁 Копирую без изменений: $img"
      cp "$img" "webp/$img"
      ;;
  esac
done