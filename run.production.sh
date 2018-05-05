#!/bin/sh
pm2 stop all

cp /home/mg/chalktalk-presentations/chalktalk/content/presentations.production.js /home/mg/chalktalk-presentations/chalktalk/content/presentations.js

cd /home/mg/chalktalk-presentations/chalktalk
pm2 start "./run.production.sh" --name "chalktalk-server"

cp /home/mg/chalktalk-presentations/admin/src/feathersClient.production.js /home/mg/chalktalk-presentations/admin/src/feathersClient.js
cd /home/mg/chalktalk-presentations/admin

pm2 start "/usr/bin/npm" --name "chalktalkp admin" -- start

cd /home/mg/chalktalk-presentations/middleware
pm2 start "/usr/bin/npm" --name "chalktalkp middleware" -- start
