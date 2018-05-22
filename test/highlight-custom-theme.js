'use strict'

var test    =  require('tape')
var path    =  require('path')
var peacock =  require('..')
var utl = require('./utl')
var wrapped = utl.wrapped

test('passing theme hide-semicolons theme as object literal',  function(t) {
  var theme = require(path.join(__dirname, '..', 'themes', 'hide-semicolons'))
  var code = 'var a = 3;'
  var result = peacock.highlight(code, { theme: theme })

  t.equals(result, wrapped('<span class="k">var</span> a <span class="o">=</span> <span class="f">3</span>'), 'highlighted')
  t.end()
})
