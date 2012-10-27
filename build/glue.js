'use strict'
/*jshint asi: true */

var path         =  require('path')
  , fs           =  require('fs')
  , cardinal     =  require('cardinal')
  , root         =  path.join(__dirname, '..')
  , license      =  fs.readFileSync(path.join(root, 'LICENSE'), 'utf-8')
  , spans        =  fs.readFileSync(path.join(root, 'spans.js'), 'utf-8')
  , defaultTheme =  fs.readFileSync(path.join(root, 'themes', 'default.js'), 'utf-8')
  , peacock      =  require('..') //fs.readFileSync(path.join(root, 'peacock.js'), 'utf-8')
  , peacockBrowserPath = path.join(root, 'peacock-browser.js')
  , lines = []
  , iifeHead = '(function (exports) {'
  , iifeFoot = '})(window);' // TODO: support AMD

function outModuleExports (s) {
  return !(/^.*module\.exports.*=.*$/).test(s)
}

function outRequires (s) {
  return !(/^.*(var|,).+=.*require\(.+\).*$/).test(s)
}

function addSourceMap(fileName) {
   lines.push('  //@ sourceMappingURL=' + fileName + '.map')
}

// LICENSE
lines.push('/*')

license
  .split('\n')
  .map(function (s) { return ' * ' + s })
  .forEach(function (s) { lines.push(s) })

lines.push(' */')
lines.push('')

// wrap start
lines.push(iifeHead)
lines.push('  \'use strict\';')

// spans
addSourceMap('spans.js')
spans
  .split('\n')
  .filter(outModuleExports)
  .forEach(function (s) { lines.push('  ' + s) })

// default theme
addSourceMap('themes/default.js')
defaultTheme
  .replace(/module.exports/, 'var defaultTheme')
  .split('\n')
  .filter(outRequires)
  .forEach(function (s) { lines.push('  ' + s) })
  
// peacock 
addSourceMap('peacock.js')

var resolveThemeReplacement = '  ' + 
  function resolveTheme () { 
    throw new Error('Resolving a theme by filename only works server side. \n' + 
                    'Manually resolve or create a theme {Object} and pass that to "highlight" instead.');
  } 

lines.push('')
lines.push(resolveThemeReplacement);
lines.push('')


lines.push('')
lines.push('var redeyed = redeyed || exports.redeyed;');
lines.push('')

peacock.highlight.toString()
  .split('\n')
  .forEach(function (s) { lines.push('  ' + s) })

lines.push('')
lines.push('  exports.peacock = { highlight: highlight };')
lines.push('')

// wrap end
lines.push(iifeFoot)

// console.log( cardinal.highlight(lines.join('\n')) )

fs.writeFileSync(peacockBrowserPath, lines.join('\n'), 'utf-8')
