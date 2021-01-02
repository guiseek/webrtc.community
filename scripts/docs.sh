#!/bin/sh

# Install
echo 'Install'
# npm install
sleep 10

# Affected
echo 'Affected'
npm run build:all

# Docs
echo 'Docs'
npm run docs
