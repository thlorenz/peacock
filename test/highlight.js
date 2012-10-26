/*jshint asi: true*/
var test    =  require('tap').test
  , utl     =  require('./utl')
  , wrap    =  utl.wrap
  , run     =  utl.run

test('\nhighlights with default theme', function (t) {
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

