# peacock [![build status](https://secure.travis-ci.org/thlorenz/peacock.svg?branch=master)](http://travis-ci.org/thlorenz/peacock)

<a href="https://www.patreon.com/bePatron?u=8663953"><img alt="become a patron" src="https://c5.patreon.com/external/logo/become_a_patron_button.png" height="35px"></a>

JavaScript syntax highlighter that generates [pygments](http://pygments.org/) compatible html and therefore supports
[pygments styles](https://github.com/thlorenz/peacock/tree/master/styles).

![peacock](http://animal-dream.com/data_images/peacock/peacock2.jpg)

Peacock *(Pavo cristasus)*

## Installation

    npm install peacock

## Try it

### Online

[peacock github page](http://thlorenz.github.com/peacock/)

### Included demo

`npm exlore peacock`
`npm run demo`

## Features and limitations

- works server side via [nodejs](http://nodejs.org)
- works in the browser via AMD, if available, or as global window object
- **only highlights JavaScript** - if that is a dealbreaker look into some [alternatives](#alternatives)

## API

### ***peacock.highlight(code[, opts])***

Returns the highlighted version of the code that was passed or throws an error if it was not able to parse it.

#### opts:

```js
{
    theme: {String}|{Object}
  , linenos: true|false
  , jsx: true|false
}
```

#### theme:

- (`{Object}` or `{String}`) that is used to optionally override the theme used to highlight
- if it is `{Object}` it has to be of [this form](https://github.com/thlorenz/peacock/blob/master/themes/empty.js)
- it can also be a `{String}`, **if used server side** - either the name of a [built-in
  theme](https://github.com/thlorenz/peacock/tree/master/themes) or the full path to a theme anywhere on your computer

#### linenos:

- if true the generated html includes line numbers
- default is false

#### jsx

- if `true` peacock will support `jsx` syntax (which makes highlighting a tad bit slower)
- default: `true`

## Browser support

### AMD

Ensure to include [redeyed](https://github.com/thlorenz/redeyed) and [esprima](https://github.com/ariya/esprima) as your
dependencies

```js
define(['peacock'], function (peacock) {
 [ .. ]
});
```

### Attached to global window object

peacock will be exposed as `window.peacock` which allows calling `peacock.highlight` from anywhere.

```html
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/esprima/2.7.2/esprima.min.js"></script>
<script type="text/javascript" src="https://rawgit.com/thlorenz/redeyed/master/redeyed.js"></script>
<script type="text/javascript" src="https://rawgit.com/thlorenz/peacock/master/peacock-browser.js"></script>
```

## Examples ([*browse*](https://github.com/thlorenz/peacock/tree/master/examples))

- [pageofself](https://github.com/thlorenz/peacock/blob/master/examples/pageofself.js) highlights itself using
  the [tango style](https://github.com/thlorenz/peacock/blob/master/styles/tango.css)
- [pageofself-hide-semicolons](https://github.com/thlorenz/peacock/blob/master/examples/pageofself-hide-semicolons.js) highlights itself using
  the [fruity style](https://github.com/thlorenz/peacock/blob/master/styles/fruity.css) and hides all semicolons
- [amd browser example](https://github.com/thlorenz/peacock/tree/master/examples/browser-amd) which uses
  [requirejs](http://requirejs.org) to resolve peacock
- [simple browser example](https://github.com/thlorenz/peacock/tree/master/examples/browser-simple) which uses the
  global window object to access peacock

## Alternatives

- for client side highlighting give [SyntaxHighlighter](http://alexgorbatchev.com/SyntaxHighlighter/) a try
- for server side highlighting driven by nodejs, try
  [node-syntaxhighlighter](https://github.com/thlorenz/node-syntaxhighlighter)
- [highlightjs](http://softwaremaniacs.org/soft/highlight/en/) is another client side option
- [pygments](http://pygments.org/) is a great server side highlighter, granted you are running python
