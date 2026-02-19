#!/bin/bash

# Ensure the script runs from the location of this script
cd "$(dirname "$0")"

echo "🚀 Starting Redesign React Project..."

# Check if the redesign-react directory exists
if [ -d "redesign-react" ]; then
    cd redesign-react
    
    # Check if node_modules exists
    if [ ! -d "node_modules" ]; then
        echo "📦 Dependencies not found. Installing..."
        npm install
    else
        echo "✅ Dependencies found."
    fi

    # Start the development server
    echo "🌟 Starting development server..."
    npm run dev
else
    echo "❌ Error: redesign-react directory not found!"
    exit 1
fi
