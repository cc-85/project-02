const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true, maxlength: 280 },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true //automatically creates createdAt and updatedAt fields. Outside of the brackets because its a setting applied
});

//describe the schema
const postSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  hero: String,
  copy: String,
  comments: [ commentSchema ],
  user: { type: mongoose.Schema.ObjectId, ref: 'User' }
});

//create the model
module.exports = mongoose.model('Post', postSchema);
