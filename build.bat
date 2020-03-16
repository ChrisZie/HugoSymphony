rm -rf docs
cd ..
rm -rf LIVE-WS/*
cd LIVE-WS/
git add . 
git commit -m "rebuild"
cd ..
cd symphony/
hugo --minify