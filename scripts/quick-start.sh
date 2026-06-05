#!/bin/bash

# load .env
set -a
source "$(dirname "$0")/../.env"
set +a

# Vérifier que dev-repo est défini
if [ -z "$dev_repo" ]; then
  echo "❌ dev_repo non défini dans .env"
  exit 1
fi

DIST_TARGET="${dev_repo}/"

cd "$DIST_TARGET" || { echo "❌ Impossible de changer de répertoire vers $DIST_TARGET"; exit 1; }
echo $(pwd)
docker compose up -d
cd - || { echo "❌ Impossible de revenir au répertoire précédent"; exit 1; }
bash scripts/watch-front.sh
