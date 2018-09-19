const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  image: { type: String, unique: true },
  password: { type: String, required: true }
});

//virtual to aggregate the posts of a user
userSchema.virtual('posts', {
  localField: '_id',
  foreignField: 'user',
  ref: 'Post'
});



//set up a passwordConfirmation virtual because we DO want the data
//but we don't want to store it in the database
userSchema.virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    //store the passwordConfirmation on `this` for use later
    this._passwordConfirmation = passwordConfirmation;
  });

//PRE-VALIDATE LIFECYCLE HOOK - runs before validation
userSchema.pre('validate', function checkPasswordsMatch(next) {
  // if the password is is modified and the password and passwordConfirmation
  //do not match, invalidate the passwordConfirmation field
  //this will prevent the user record from being saved
  //and throw an error at the VALIDATION stage
  if(this.isModified('password') && this._passwordConfirmation !== this.password) {
    this.invalidate('passwordConfirmation', 'Passwords do no match');
  }

  //move onto the next step which is VALIDATION stage
  next();
});

//PRE-SAVE LIFECYCLE HOOK - runs before data is saved to the database
userSchema.pre('save', function hashPassword(next) {
  //if the user's password is modified, hash the password using bcrypt
  //and 8 rounds of salt and set to the password field
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }

  //move on to the next step which is the SAVE stage
  next();
});

//custom method to validate a password against a user's hashed password
userSchema.methods.validatePassword = function validatePassword(password) {
  //`password` is the plain text passwordConfirmation
  //`this.password` is the hashed password stored on the user record
  return bcrypt.compareSync(password, this.password);
};

//adding default images
userSchema.virtual('imageSrc')
  .get(function() {
    return this.image || 'https://www.podstelford.org/wp-content/uploads/2017/04/noavatar.png';
  });

module.exports = mongoose.model('User', userSchema);
