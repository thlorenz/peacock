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

function run(t, cases, theme) {
  Object.keys(cases).forEach(function (k) {
    var vals = cases[k]
      , code = vals[0]
      , high = vals[1]

    t.equals(peacock.highlight(code, theme), wrapped(high), k);
  });
  t.end()
}

test('highlights with default theme', function (t) {
  var cases = { 
    'var initialization': [ 
      'var a = 3;'
    , '<span class="k">var</span> a <span class="o">=</span> <span class="f">3</span><span class="p">;</span>' 
    ]
  , 'single line comment': [ 
      '//s l c\n var c;'
    , '<span class="c1">//s l c</span>\n <span class="k">var</span> c<span class="p">;</span>' 
    ]
  , 'inline block comment': [ 
      'var /*comment*/ c;'
    , '<span class="k">var</span> <span class="c">/*comment*/</span> c<span class="p">;</span>' 
    ]
  , 'multi-line block comment': [ 
      '/*comment\n * more comment*/ var c;'
    , '<span class="c">/*comment\n * more comment*/</span> <span class="k">var</span> c<span class="p">;</span>' 
    ]
  , 'escapes html in block comment': [ 
      '/*comment <div></div> */'
    , '<span class="c">/*comment &lt;div&gt;&lt;/div&gt; */</span>' 
    ]
  , 'escapes html in line comment': [ 
      '// comment <div></div>'
    , '<span class="c1">// comment &lt;div&gt;&lt;/div&gt;</span>' 
    ]
  , 'escapes html in string': [ 
      'var a = \'<div></div>\''
    , '<span class="k">var</span> a <span class="o">=</span> <span class="s">\'&lt;div&gt;&lt;/div&gt;\'</span>' 
    ]
  }
  run(t, cases)
});

test('higlights with hide-semicolons theme', function (t) {
  var cases = { 
      'var initialization with semicolon': [ 
        'var a = 3;'
      , '<span class="k">var</span> a <span class="o">=</span> <span class="f">3</span>' 
      ]
    , 'multiple semicolons on same line': [ 
        'var a = 3; console.log(a);'
      , '<span class="k">var</span> a <span class="o">=</span> <span class="f">3</span> console<span class="p">.</span>log<span class="p">(</span>a<span class="p">)</span>' 
      ]
    }
  run(t, cases, 'hide-semicolons')
})
