#!/bin/bash

# Ensure the script runs from the project directory
cd "$(dirname "$0")"

echo "🚀 Starting Redesign React Project..."

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
