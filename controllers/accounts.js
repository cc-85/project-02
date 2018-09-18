const User = require('../models/user');

function showRoute(req, res) {
  User.populate(req.currentUser, { path: 'posts' }, (err, user) => {
    res.render('accounts/show', { user });
  });
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

function deleteRoute(req, res) {
  req.currentUser.remove(() => {
    req.session.regenerate(() => {
      req.flash('info', 'Account deleted');
      res.redirect('/');
    });
  });
}

module.exports = {
  show: showRoute,
  edit: editRoute,
  update: updateRoute,
  delete: deleteRoute
};
