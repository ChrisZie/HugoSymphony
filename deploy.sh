#!/bin/sh
# If a command fails then the deploy stops
set -e

rm -rf docs
cd ..
rm -rf LIVE-WS/*
cd LIVE-WS/
git add . 
git commit -m "rebuild delete content"
cd ..
cd symphony/
hugo --minify