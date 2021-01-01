#!/bin/sh

# Install
echo 'Install'
npm install

# Affected
echo 'Affected'
npm run build:all

# Docs
echo 'Docs'
npm run docs
