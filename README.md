# pdftohtml - pdf2htmlEx shell wrapper for Node.js

pdftohtml provides access to [pdf2htmlEX](https://github.com/coolwanglu/pdf2htmlEX) via shell in node.js programs.

## Requirements

- [pdf2htmlEX](https://github.com/coolwanglu/pdf2htmlEX)

If you've docker env setup, just install it via docker

```
alias pdf2htmlEX="docker run -ti --rm -v ~/pdf:/pdf iapain/pdf2htmlex pdf2htmlEX"
```

~/pdf on host computer will be used as volume

## Installation

via yarn:

```
yarn add pdftohtml
```

## Usage

```javascript
var pdftohtml = require("pdftohtml");
var converter = new pdftohtml("test/pdfs/sample.pdf", "sample.html");

// See presets (ipad, default)
// Feel free to create custom presets
// see https://github.com/alanhk89/pdftohtml/blob/master/lib/presets/ipad.js
// convert() returns promise
converter
  .convert("ipad")
  .then(function() {
    console.log("Success");
  })
  .catch(function(err) {
    console.error("Conversion error: " + err);
  });

// If you would like to disable printing of the converted html output,
// just call converter.disablePrinting()
converter
  .convert()
  .then(function() {
    converter.disablePrinting();
    console.log("Success");
  })
  .catch(function(err) {
    console.error("Conversion error: " + err);
  });

// If you would like to tap into progress then create
// progress handler
converter.progress(function(ret) {
  console.log((ret.current * 100.0) / ret.total + " %");
});
```

## Command line usage

```
yarn global add pdftohtml
```

```
pdftohtml sample.pdf
```

You may optionally provide your own filename and preset

```
pdftohtml sample.pdf sample.html ipad
```

## Tests

```
$ yarn test
```

## NodeJS Support

This library support nodejs v6+. Anything below v6 may still work but not tested.
