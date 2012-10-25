var config = require('./themes/default')
  , redeyed = require('redeyed')
  , path = require('path')
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
  var theme = resolveTheme(theme_) || config;

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
