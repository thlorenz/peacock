'use strict'

var path         =  require('path')
var fs           =  require('fs')
var root         =  path.join(__dirname, '..')
var license      =  fs.readFileSync(path.join(root, 'LICENSE'), 'utf-8')
var spans        =  fs.readFileSync(path.join(root, 'spans.js'), 'utf-8')
var defaultTheme =  fs.readFileSync(path.join(root, 'themes', 'default.js'), 'utf-8')
var template     =  fs.readFileSync(path.join(root, 'build', 'template.js'), 'utf-8')
var peacock      =  require('..') // fs.readFileSync(path.join(root, 'peacock.js'), 'utf-8')
var peacockBrowserPath = path.join(root, 'peacock-browser.js')
var code = template
var lines

function replace(id) {
  code = code.replace('// {{ ' + id + ' }}', lines.join('\n'))
}

function outModuleExports(s) {
  return !(/^.*module\.exports.*=.*$/).test(s)
}

function outRequires(s) {
  return !(/^.*(var|,).+=.*require\(.+\).*$/).test(s)
}

function addSourceMap(fileName) {
   lines.push('  //@ sourceMappingURL=' + fileName + '.map')
}

// LICENSE
lines = []
lines.push('/*')

license
  .split('\n')
  .map(function(s) { return ' * ' + s })
  .forEach(function(s) { lines.push(s) })

lines.push(' */')
lines.push('')

replace('License')

// spans
lines = []
addSourceMap('spans.js')
spans
  .split('\n')
  .filter(outModuleExports)
  .forEach(function(s) { lines.push('  ' + s) })

replace('spans')

// default theme
lines = []
addSourceMap('themes/default.js')
defaultTheme
  .replace(/module.exports/, 'var defaultTheme')
  .split('\n')
  .filter(outRequires)
  .forEach(function(s) { lines.push('  ' + s) })

replace('default-theme')

// peacock highlight
lines = []
addSourceMap('peacock.js')
peacock.highlight.toString()
  .split('\n')
  .forEach(function(s) { lines.push('  ' + s) })

replace('peacock-highlight')

// console.log( cardinal.highlight(code) )

fs.writeFileSync(peacockBrowserPath, code, 'utf-8')
