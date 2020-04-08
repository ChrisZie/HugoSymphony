#!/bin/sh
# If a command fails then the deploy stops
set -e

rm -rf docs
cd ..
rm -rf LIVE-WS/*
cd LIVE-WS/

cd ..
cd symphony/
hugo --minify
cp -R docs/ ../LIVE-WS
git add . 
git commit -m "rebuild docs content"