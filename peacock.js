var defaultTheme =  require('./themes/default')
  , redeyed      =  require('redeyed')
  , path         =  require('path')
  ;

function isPath (s) {
  return (/[\/\\]/).test(s);
}

function resolveTheme(t) {
  var mdlPath = isPath(t) ? t : path.join(__dirname, 'themes', t);
  try {
    return require(mdlPath);
  } catch (e) {
    console.error(e);
    console.warn('Couldn\'t resolve requested theme, using default theme instead');
    return undefined;
  }
}

function addLinenos (splits) {
  var splitsLen
    , totalDigits
    ;

  function getDigits (n) {
    if (n < 10) return 1;
    if (n < 100) return 2;
    if (n < 1000) return 3;
    if (n < 10000) return 4;
    // this works for up to 99,999 lines - any questions?
    return 5;
  }

  function pad (n, totalDigits) {
    // not pretty, but simple and should perform quite well
    var padDigits= totalDigits - getDigits(n);
     switch(padDigits) {
       case 0: return '' + n;
       case 1: return ' ' + n;
       case 2: return '  ' + n;
       case 3: return '   ' + n;
       case 4: return '    ' + n;
       case 5: return '     ' + n;
     }
  }

  function linenoHtml (lineno, totalDigits) {
    return  [ '<a name="line-'
            , lineno
            , '"></a><span class="lineno">'
            , pad(n, totalDigits)
            , '</span>'
            ].join('');
  }

  splitsLen = splits.length;
  totalDigits = getDigits(splitsLen);

  for (var i = 0; i < splitsLen; i++) {
    splits[i] = [ linenoHtml(i + 1, totalDigits), splits[i] ].join('');
  }
}

function highlight(code, opts) {
  var toString = Object.prototype.toString
    , splits
    , theme
    , highlightedCode;

  opts = opts || { };

  function isObject (obj) {
    return toString.call(obj) === '[object Object]';
  }

  if(opts.theme) 
    theme = isObject(opts.theme) ? opts.theme : resolveTheme(opts.theme);
  else
    theme = defaultTheme;

  splits = redeyed(code, theme, { nojoin: true }).splits;

  if (opts.lineno) addLinenos(splits);
  
  highlightedCode = splits.join('');

  return [
      '<div class="highlight"><pre>'
    , highlightedCode
    , '</pre></div>'
  ].join('\n');
}

module.exports = {
  highlight: highlight
};
