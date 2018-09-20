const User = require('../models/user');

function newRoute(req, res) {
  res.render('registrations/new');
}

function createRoute(req, res) {
  User.create(req.body, () => {


    User.findOne({ email: req.body.email }, (err, user) => {
      //verify that the password supplied once hashed matches the
      //hashed password in the database


      req.session.userId = user._id;

      req.flash('info', 'Account created!');
      res.redirect('/');
    });
  });
}

module.exports = {
  new: newRoute,
  create: createRoute
};
