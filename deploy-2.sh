#!/bin/sh
# If a command fails then the deploy stops
set -e

cd ..
cd LIVE-WS/
git add . 
git commit -m "rebuild"
git push