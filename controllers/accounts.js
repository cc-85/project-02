function showRoute(req, res) {
  res.render('accounts/show', { user: req.currentUser });
}

function editRoute(req, res) {
  res.render('accounts/edit', { user: req.currentUser });
}

function updateRoute(req, res) {
  req.currentUser.set(req.body);
  req.currentUser.save(() => {
    res.redirect('/account');
  });
}

module.exports = {
  show: showRoute,
  edit: editRoute,
  update: updateRoute
};
