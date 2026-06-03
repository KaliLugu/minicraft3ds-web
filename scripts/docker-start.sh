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

echo "Docker démarré → $DIST_TARGET"

# Build en mode watch avec outDir vers le repo docker
cd "$dev_repo" && docker compose up
