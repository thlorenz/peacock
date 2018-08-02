'use strict'

/**
 * @name peacock.defaultTheme
 * @returns {Object} the default peacock theme used to highlight code
 */
var defaultTheme = require('./themes/default')

/**
 * @name peacock.spans
 * @returns {Object} the default peacock spans used to wrap code tokens
 */
var spans        = require('./spans')
/**
 * @name peacock.classes
 * @returns {Object} the default peacock classes used to highlight code
 */
var classes = spans.classes

var redeyed      = require('redeyed')
var path         = require('path')

function isPath(s) {
  return (/[/\\]/).test(s)
}

function resolveTheme(t) {
  var mdlPath = isPath(t) ? t : path.join(__dirname, 'themes', t)
  try {
    return require(mdlPath)
  } catch (e) {
    console.error(e)
    console.warn('Couldn\'t resolve requested theme, using default theme instead')
    return undefined
  }
}

/**
 * Highlights the proviced code or throws an error if it was not able to parse it.
 *
 * @name peacock.highlight
 * @param {String} code to highlight
 * @param {Object} $0 options
 * @param {Object|String} [$0.theme = peacock.defaultTheme] to use when highlighting [empty sample](https://github.com/thlorenz/peacock/blob/master/themes/empty.js)
 * @param {Boolean} [$0.linenos = false] if `true` line numbers will be included
 * @param {Boolean} [$0.jsx = true] if `true` peacock will support `jsx` syntax (which makes highlighting a tad bit slower)
 * @returns {String} the HTML with containing the highlighted code
 */
function highlight(code, opts) {
  var toString = Object.prototype.toString
  var theme
  var highlightedCode

  function createLinenos(highlightedCode) {
    var linesLen = highlightedCode.split('\n').length
    var lines = []
    var totalDigits

    function getDigits(n) {
      if (n < 10) return 1
      if (n < 100) return 2
      if (n < 1000) return 3
      if (n < 10000) return 4
      // this works for up to 99,999 lines - any questions?
      return 5
    }

    function pad(n, totalDigits) {
      // not pretty, but simple and should perform quite well
      var padDigits = totalDigits - getDigits(n)
      switch (padDigits) {
        case 0: return '' + n
        case 1: return ' ' + n
        case 2: return '  ' + n
        case 3: return '   ' + n
        case 4: return '    ' + n
        case 5: return '     ' + n
      }
    }

    function linenoHtml(lineno, totalDigits) {
      return  [ '<span class="lineno">'
              , pad(lineno, totalDigits)
              , '</span>'
              ].join('')
    }

    totalDigits = getDigits(linesLen)

    for (var i = 1; i <= linesLen; i++) {
      lines.push(linenoHtml(i, totalDigits))
    }

    return lines.join('\n')
  }

  opts = opts || {}
  var jsx = (
    typeof opts === 'string' ||
    typeof opts.jsx === 'undefined' ||
    !!opts.jsx
  )

  function isObject(obj) {
    return toString.call(obj) === '[object Object]'
  }

  if (opts.theme) {
    theme = isObject(opts.theme) ? opts.theme : resolveTheme(opts.theme)
  } else { theme = defaultTheme }

  highlightedCode = redeyed(code, theme, { jsx: jsx }).code

  // Wrap highlighted code inside two column table with lineno column
  if (opts.linenos) {
    highlightedCode = [
        '<table>'
      ,   '<td>'
      ,     createLinenos(highlightedCode)
      ,   '</td>'
      ,   '<td>'
      ,      highlightedCode
      ,   '</td>'
      , '</table>'
      ].join('\n')
  }

  return [
      '<div class="highlight"><pre>'
    , highlightedCode
    , '</pre></div>'
  ].join('\n')
}

module.exports = {
    highlight    : highlight
  , defaultTheme : defaultTheme
  , spans        : spans
  , classes      : classes
}
