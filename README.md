# peacock [![build status](https://secure.travis-ci.org/thlorenz/peacock.png)](http://travis-ci.org/thlorenz/peacock)

JavaScript syntax highlighter that generates [pygments](http://pygments.org/) compatible html and therefore supports
[pygments styles](https://github.com/thlorenz/peacock/tree/master/styles).

![peacock](http://animal.discovery.com/birds/peacock/pictures/peacock-picture.jpg)

[Peacock](http://animal.discovery.com/birds/peacock/) *(Pavo cristasus)*

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

## Browser support

### Attached to global window object

peacock will be exposed as `window.peacock` which allows calling `peacock.highlight` from anywhere.

```html
<script type="text/javascript" src="https://raw.github.com/ariya/esprima/master/esprima.js"></script>
<script type="text/javascript" src="https://raw.github.com/thlorenz/redeyed/master/redeyed.js"></script>
<script type="text/javascript" src="https://github.com/thlorenz/peacock/raw/master/peacock-browser.js"></script>
```

## Examples ([*browse*](https://github.com/thlorenz/peacock/tree/master/examples))

- visit [peacock's homepage](http://thlorenz.github.com/peacock/)
- [pageofself](https://github.com/thlorenz/peacock/blob/master/examples/pageofself.js) highlights itself using
  the [tango style](https://github.com/thlorenz/peacock/blob/master/styles/tango.css)
- [pageofself-hide-semicolons](https://github.com/thlorenz/peacock/blob/master/examples/pageofself-hide-semicolons.js) highlights itself using
  the [fruity style](https://github.com/thlorenz/peacock/blob/master/styles/fruity.css) and hides all semicolons
