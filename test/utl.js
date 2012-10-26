/*jshint asi:true*/
var peacock = require('..')

function wrapped(s) {
  return [
      '<div class="highlight"><pre>'
    , s
    , '</pre></div>'
  ].join('\n');
}

function run(t, cases, theme) {
  Object.keys(cases).forEach(function (k) {
    var vals = cases[k]
      , code = vals[0]
      , high = vals[1]

    t.equals(peacock.highlight(code, theme), wrapped(high), k);
  });
  t.end()
}

module.exports = {
    wrapped: wrapped
  , run: run
}
