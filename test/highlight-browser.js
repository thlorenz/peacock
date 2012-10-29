'use strict'
/*jshint asi: true, browser: true*/
/*global define window */

var test          =  require('tap').test
  , utl           =  require('./utl')
  , redeyed       =  require('redeyed')
  , esprima       =  require('../node_modules/redeyed/node_modules/esprima')
  , peacockkey    =  require.resolve('../peacock-browser')

function setup() {
  // remove peacockfrom require cache to force re-require for each test
  delete require.cache[peacockkey];

  // remove globals
  delete global.window;
  delete global.define;
}

test('define and window exist', function (t) {
  var defineCb
    , deps

  setup()  

  // declare browser globals
  global.window = { }

  global.define = function (deps_, cb) { 
    deps = deps_; 
    defineCb = cb 
  }

  define.amd = true

  require('../peacock-browser')

  var definedpeacock = defineCb(redeyed)


  var result = definedpeacock.highlight('var a = 3;')

  t.equal(window.peacock, undefined, 'peacock is not attached to window')
  t.deepEquals(['redeyed'], deps, 'requires redeyed')
  t.equals(
      result
    , utl.wrapped('<span class="k">var</span> a <span class="o">=</span> <span class="f">3</span><span class="p">;</span>')
    , 'peacock is defined and highlights')

  result = definedpeacock.highlight('var a = 3;', { linenos: true })

  t.equals(
      result
    , [ '<div class="highlight"><pre>'
      , '<table>'
      , '<td>'
      , '<span class="lineno">1</span>'
      , '</td>'
      , '<td>'
      , '<span class="k">var</span> a <span class="o">=</span> <span class="f">3</span><span class="p">;</span>'
      , '</td>'
      , '</table>'
      , '</pre></div>'
      ].join('\n')
    , 'peacock is defined and highlights with linenos')

  t.end()
})

test('window exists, but define doesn\'t', function (t) {
  setup()  

  // declare browser globals
  global.window = { esprima: esprima, redeyed: redeyed }
  
  // attach redeyed to window
  require('../peacock-browser')

  var result = window.peacock.highlight('var a = 3;')

  t.equals(
      result
    , utl.wrapped('<span class="k">var</span> a <span class="o">=</span> <span class="f">3</span><span class="p">;</span>')
    , 'peacock is attached to window and highlights')

  t.end()
})
