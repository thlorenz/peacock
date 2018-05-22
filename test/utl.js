'use strict'

var peacock = require('..')

function wrapped(s) {
  return [
      '<div class="highlight"><pre>'
    , s
    , '</pre></div>'
  ].join('\n')
}

function run(t, cases, opts) {
  Object.keys(cases).forEach(function(k) {
    var vals = cases[k]
    var code = vals[0]
    var high = vals[1]

    t.equals(peacock.highlight(code, opts), wrapped(high), k)
  })
  t.end()
}

module.exports = {
    wrapped: wrapped
  , run: run
}
