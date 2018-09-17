

function indexRoute(req, res) {
  res.render('accounts/show');
}

module.exports = {
  index: indexRoute
};
