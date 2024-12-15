#!/bin/bash
cd frontend

# Install Tailwind CSS and its peer dependencies
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

# Initialize Tailwind CSS
npx tailwindcss init -p
