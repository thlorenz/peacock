/*jshint asi: true*/
var test    =  require('tap').test
  , path    =  require('path')
  , peacock =  require('..')
  , utl = require('./utl')
  , wrapped = utl.wrapped

test('passing theme hide-semicolons theme as object literal',  function (t) {
  var theme = require(path.join(__dirname, '..', 'themes', 'hide-semicolons'))
    , code = 'var a = 3;'
    , result = peacock.highlight(code, { theme: theme })

  t.equals(result , wrapped('<span class="k">var</span> a <span class="o">=</span> <span class="f">3</span>'), 'highlighted')
  t.end()
});
