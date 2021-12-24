const render404Page = (_, res) => {
  res.render("404", { pageTitle: "Not found" });
};

module.exports = {
  render404Page,
};
