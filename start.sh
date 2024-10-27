#!/bin/bash

# Start the first process
#/flask/venv_prod/bin/python /flask/scr/main.py &

/flask/venv_prod/bin/gunicorn -b 0.0.0.0:5000 scr.main:app &

 
# Start the second process
httpd-foreground &

# Wait for any process to exit
wait -n

# Exit with status of process that exited first
exit $?