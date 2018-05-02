#!/bin/sh
pm2 stop all

cd /home/mg/chalktalk-presentations/chalktalk
pm2 start "./run.linux" --name "chalktalk-server"

cd /home/mg/chalktalk-presentations/admin
pm2 start "/usr/bin/npm" --name "chalktalkp admin" -- start

cd /home/mg/chalktalk-presentations/middleware
pm2 start "/usr/bin/npm" --name "chalktalkp middleware" -- start
