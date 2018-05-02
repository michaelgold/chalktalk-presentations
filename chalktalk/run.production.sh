#!/bin/sh
killall node
node server/main.js >> node.log &
#xdg-open 'http://localhost:11235/'
#assuming chrome is in the path
#chromium-browser --allow-file-access-from-files 'http://localhost:11235/'
