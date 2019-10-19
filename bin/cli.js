#!/usr/bin/env node

var pdftohtml = require("..");
var fs = require("fs");

var filename = process.argv[2];
if (filename) {
  var isExists = fs.readFileSync(filename);
  if (!isExists) {
    console.log(printUsage());
  } else {
    var outfile = process.argv[3];
    var preset = process.argv[4] || "default";
    run(filename, outfile, preset);
  }
} else console.log(printUsage());

function run(str, outfile, preset) {
  var converter = new pdftohtml(filename, outfile);
  converter
    .convert(preset)
    .then(function() {
      fs.readFile(outfile, "utf8", function(err, data) {
        if (err) {
          return console.log(err);
        }
        var result = data.replace(
          /<title><\/title>/g,
          "<style>@media print { body { display: none}}</style><title></title>"
        );

        fs.writeFile(outfile, result, "utf8", function(err) {
          if (err) return console.log(err);
          console.log("Done");
          console.log("Saved to: " + outfile);
        });
      });
    })
    .catch(function(err) {
      console.error(err);
    });
}

function printUsage() {
  return "pdftohtml <input_pdf_file> [out_file] [preset]\n\
            out_file: output html file. (optional)\n\
            preset: conversion preferences (optional)";
}
