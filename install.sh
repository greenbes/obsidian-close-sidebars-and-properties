#!/usr/bin/env bash

echo "Installing plugin"

export OBSIDIAN_VAULT="${HOME}/obsidian/SEG Notes"

set -x   # Start printing commands

# Ensure the directory exists
install -d "${OBSIDIAN_VAULT}/.obsidian/plugins/obsidian-close-sidebars-and-properties"

install -m 644 main.js main.js.map manifest.json \
	"${OBSIDIAN_VAULT}/.obsidian/plugins/obsidian-close-sidebars-and-properties/"

set +x   # Stop printing commands
