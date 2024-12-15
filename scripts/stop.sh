#!/bin/bash

# Find Python process running on port 8000
PID=$(lsof -t -i:8000)

if [ -z "$PID" ]; then
    echo "No Django server found running on port 8000."
else
    echo "Stopping Django server (PID: $PID)..."
    kill -9 $PID
    echo "Django server stopped."
fi
