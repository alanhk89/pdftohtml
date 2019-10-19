exports.load = function(pdf2htmlex) {
  pdf2htmlex.add_options([
    "--fit-width 968",
    "--font-format woff",
    "--printing 0",
    "--embed-outline 0"
  ]);
  return pdf2htmlex;
};
