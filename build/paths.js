var path = require('path');

var appRoot = 'src/';
var outputRoot = 'dist/';
var artifactsRoot = 'artifacts/';
var jspmRoot = 'jspm_packages/';

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  css: appRoot + '**/*.css',
  style: 'styles/**/*.css',
  output: outputRoot,
  artifacts: artifactsRoot,
  doc:'./doc',
  e2eSpecsSrc: 'test/e2e/src/*.js',
  e2eSpecsDist: 'test/e2e/dist/',
  jspm: jspmRoot
};
