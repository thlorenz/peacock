/*jshint asi: true*/
var test    =  require('tap').test
  , path    =  require('path')
  , utl     =  require('./utl')
  , wrap    =  utl.wrap
  , run     =  utl.run

test('\nhiglights with hide-semicolons theme', function (t) {
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
  run(t, cases, { theme: 'hide-semicolons' })
})

// same cases as above, just making sure that theme got resolved properly
test('\nhiglights with hide-semicolons theme resolved via path, excluding file extension', function (t) {
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
  var themePath = path.join(__dirname, '..', 'themes', 'hide-semicolons');
  run(t, cases, { theme: themePath })
})

test('\nhiglights with hide-semicolons theme resolved via path, including file extension', function (t) {
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
  var themePath = path.join(__dirname, '..', 'themes', 'hide-semicolons.js');
  run(t, cases, { theme: themePath })
})
