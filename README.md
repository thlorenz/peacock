# peacock [![build status](https://secure.travis-ci.org/thlorenz/peacock.png)](http://travis-ci.org/thlorenz/peacock)

JavaScript syntax highlighter that generates html that is compatible with [pygments
styles](https://github.com/thlorenz/peacock/tree/master/styles).

## Status

- functional server side

## Installation

    npm install peacock

## API

### ***peacock.highlight(code[, theme])***

- returns the highlighted version of the file whose fullPath ({String}) was passed or throws an error if it was not able
  to parse it
- `theme` ({Object} or {String}) is used to optionally override the theme used to highlight
  - if it is {Object} it has to be of [this form](https://github.com/thlorenz/peacock/blob/master/themes/empty.js)
  - it can also be a {String} (either the name of a [built-in
    theme](https://github.com/thlorenz/peacock/tree/master/themes) or the full path to a theme anywhere on your computer

## Examples (**[browse]**(https://github.com/thlorenz/peacock/tree/master/examples))

- `node` [pageofself](https://github.com/thlorenz/peacock/blob/master/examples/pageofself.js) highlights itself using
  the [tango style](https://github.com/thlorenz/peacock/blob/master/styles/tango.css)
- `node` [pageofself-hide-semicolons](https://github.com/thlorenz/peacock/blob/master/examples/pageofself-hide-semicolons.js) highlights itself using
  the [fruity style](https://github.com/thlorenz/peacock/blob/master/styles/fruity.css) and hides all semicolons
