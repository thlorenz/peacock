/*jshint asi: true*/
var test    =  require('tap').test
  , path    =  require('path')
  , peacock =  require('..')
  , utl = require('./utl')

test('when linenos is true', function (t) {
  var cases = { 
    'one line': [ 
        'var a = 3;'
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
    ]
    , 'two lines': [
        '// l1\n// l2'
      , [ '<div class="highlight"><pre>'
        , '<table>'
        , '<td>'
        , '<span class="lineno">1</span>'
        , '<span class="lineno">2</span>'
        , '</td>'
        , '<td>'
        , '<span class="c1">// l1</span>'
        , '<span class="c1">// l2</span>'
        , '</td>'
        , '</table>'
        , '</pre></div>'
        ].join('\n')
    ]
  };

  Object.keys(cases).forEach(function (key) {
    t.equals(peacock.highlight(cases[key][0], { linenos: true }), cases[key][1], key)
  })

  t.end()
});
