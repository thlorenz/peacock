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

function highlight(code, theme_) {
  var toString = Object.prototype.toString;

  function isObject (obj) {
    return toString.call(obj) === '[object Object]';
  }

  var theme;

  if(theme_) 
    theme = isObject(theme_) ? theme_ : resolveTheme(theme_);
  else
    theme = defaultTheme;

  var highlightedCode = redeyed(code, theme).code;

  return [
      '<div class="highlight"><pre>'
    , highlightedCode
    , '</pre></div>'
  ].join('\n');
}

module.exports = {
  highlight: highlight
};
