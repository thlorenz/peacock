'use strict'
/*jshint asi: true, browser: true*/
/*global define window */

/*
 *var test = require('tap').test
 *  , util = require('util')
 *  , redeyedExport = require('..')
 *  , redeyedkey = require.resolve('..')
 *  , esprima = require('esprima')
 *
 *function setup() {
 *  // remove redeyed from require cache to force re-require for each test
 *  delete require.cache[redeyedkey];
 *  
 *  // remove globals
 *  delete global.window;
 *  delete global.define;
 *}
 *
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
