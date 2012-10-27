'use strict'
/*jshint asi: true, browser: true*/
/*global define window */

var test          =  require('tap').test
  , utl           =  require('./utl')
  , redeyed       =  require('redeyed')
  , esprima       =  require('../node_modules/redeyed/node_modules/esprima')
  , peacockExport =  require('..')
  , peacockkey    =  require.resolve('..')

function setup() {
  // remove peacockfrom require cache to force re-require for each test
  delete require.cache[peacockkey];

  // remove globals
  delete global.window;
  delete global.define;
}

/*
 *test('define and window exist', function (t) {
 *  var defineCb
 *    , deps
 *
 *  setup()  
 *
 *  // declare browser globals
 *  global.window = { }
 *
 *  global.define = function (deps_, cb) { 
 *    deps_ = deps 
 *    defineCb = cb 
 *  }
 *
 *  define.amd = true
 *
 *  var redeyed = require('..')
 *    , definedredeyed = defineCb(esprima)
 *
 *  t.equal(window.redeyed, undefined, 'redeyed is not attached to window')
 *  t.notEqual(redeyed.toString(), redeyedExport.toString(), 'redeyed is not exported')
 *  t.equal(definedredeyed.toString(), redeyedExport.toString(), 'redeyed is defined')
 *
 *  t.end()
 *})
 */

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
