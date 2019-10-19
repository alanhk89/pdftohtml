exports.load = function(pdf2htmlex) {
  pdf2htmlex.add_options([
    "--zoom 1.33",
    "--font-format woff",
    "--printing 0",
    "--embed-outline 0"
  ]);
  return pdf2htmlex;
};
