/*jshint asi: true*/
var peacock = require('..')
  , test = require('tap').test

function wrapped(s) {
  return [
      '<div class="highlight"><pre>'
    , s
    , '</pre></div>'
  ].join('\n');
}

test('simple highlights with default theme', function (t) {
  function hl (s) {
    return peacock.highlight(s);
  }
  var cases = { 
    'var initialization': [ 
        'var a = 3;'
    , '<span class="k">var</span> a <span class="o">=</span> <span class="f">3</span><span class="p">;</span>' 
    ]
  , 'single line comment': [ 
      '//s l c\n var c;'
    , '<span class="c1">//s l c</span>\n <span class="k">var</span> c<span class="p">;</span>' 
    ]
  }

  Object.keys(cases).forEach(function (k) {
    var vals = cases[k]
      , code = vals[0]
      , high = vals[1]

    t.equals(peacock.highlight(code), wrapped(high), k);
  });
  t.end()
  
});
