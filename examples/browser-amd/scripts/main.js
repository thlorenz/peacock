'use strict'

/* global requirejs */
requirejs.config({
  // NOTE: In order to simplify this example, we pull the dependencies from the web. In a real app they should be local.
  paths: {
      'jquery'  :  'http://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min'
    , 'esprima' :  'https://cdn.jsdelivr.net/npm/esprima@4.0.0/dist/esprima.min'
    , 'redeyed' :  'https://rawgit.com/thlorenz/redeyed/master/redeyed'
    , 'peacock' :  '../../../peacock-browser'
  }
})

require(['index'])
