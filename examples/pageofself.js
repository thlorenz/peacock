/*
 * Creates html version of itself and wraps it inside html page tags.
 * Finally opens it in the browser.
 */
'use strict'

var peacock  =  require('..')
var fs       =  require('fs')
var path     =  require('path')
var exec     =  require('child_process').exec
var styles   =  path.join(__dirname, '..', 'styles')
var code     =  fs.readFileSync(__filename, 'utf-8')
var htmlFile =  './pageofself.html'

// Highlight code and generate html with style reference included
function highlight(code) {
  var highlightedCode = peacock.highlight(code)

  return [
      '<!DOCTYPE HTML>'
    , '<html>'
    , '<head>'
    , '   <meta http-equiv="content-type" content="text/html; charset=utf-8"/>'
    , '   <title>Page of Self</title>'
    , ' <link rel="stylesheet" href="' + styles + '/tango.css" type="text/css" media="screen" charset="utf-8" />'
    , '</head>'
    , '<body>'
    , highlightedCode
    , '</body>'
    , '</html'
    ].join('\n')
}

var html = highlight(code)

// write html page
fs.writeFileSync(htmlFile, html)

exec('open ' + htmlFile)
