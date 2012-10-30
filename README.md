# peacock [![build status](https://secure.travis-ci.org/thlorenz/peacock.png)](http://travis-ci.org/thlorenz/peacock)

JavaScript syntax highlighter that generates [pygments](http://pygments.org/) compatible html and therefore supports
[pygments styles](https://github.com/thlorenz/peacock/tree/master/styles).

![peacock](http://animal.discovery.com/birds/peacock/pictures/peacock-picture.jpg)

[Peacock](http://animal.discovery.com/birds/peacock/) *(Pavo cristasus)*

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
<script type="text/javascript" src="https://raw.github.com/ariya/esprima/master/esprima.js"></script>
<script type="text/javascript" src="https://raw.github.com/thlorenz/redeyed/master/redeyed.js"></script>
<script type="text/javascript" src="https://github.com/thlorenz/peacock/raw/master/peacock-browser.js"></script>
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
