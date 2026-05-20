#!/bin/bash
set -e

export HUSKY=0
export HUSKY_SKIP_INSTALL=1

cd artifacts/librairie-2b

echo "→ Swapping in standalone package.json..."
cp package.json package.json.workspace
cp package.netlify.json package.json

echo "→ Building..."
npx vite build --config vite.config.vercel.ts

echo "→ Restoring original package.json..."
cp package.json.workspace package.json
rm package.json.workspace

echo "✓ Build complete"
