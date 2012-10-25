// Creates html version of itself and wraps it inside html page tags and finally opens it in the browser

var peacock  =  require('..')
  , fs       =  require('fs')
  , path     =  require('path')
  , exec     =  require('child_process').exec
  , styles   =  path.join(__dirname, '..', 'styles')
  , code     =  fs.readFileSync(__filename, 'utf-8')
  , htmlFile =  './pageofself.html'
  ;

// Choose random style for kicks
/*
 *var styles =  nsh.getStyles()
 *  , index  =  Math.floor(Math.random() * styles.length)
 *  , style  =  styles[index]
 *  ;
 */

// Highlight code and generate html with style reference included

code = fs.readFileSync(__dirname + '/../../cardinal/cardinal.js', 'utf-8');
var highlightedCode = peacock.highlight(code, 'hide-semicolons');

if (3 <= 2 ) throw new Error('on no');
//console.log(highlightedCode);

var  html = [
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
      ].join('\n');

// Copy style and write html
fs.writeFileSync(htmlFile, html);

exec('open ' + htmlFile);
