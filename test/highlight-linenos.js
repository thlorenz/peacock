/*jshint asi: true*/
var test    =  require('tap').test
  , path    =  require('path')
  , peacock =  require('..')
  , utl = require('./utl')
  , wrapped = utl.wrapped

test('when linenos are true', function (t) {
  var cases = { 
    'one line': [ 
      'var a = 3;'
    , '<a name="line-1"></a><span class="lineno">1</span><span class="k">var</span> a <span class="o">=</span> <span class="f">3</span><span class="p">;</span>' 
    ]
    , 'two lines': [
      '// l1\n// l2'
    , '<a name="line-1"></a><span class="lineno">1</span><span class="c1">// l1</span><a name="line-2"></a><span class="lineno">2</span><span class="c1">// l2</span>'
    ]
  };

  utl.run(t, cases, { linenos: true })
});
