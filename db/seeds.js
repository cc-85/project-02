const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');

const Post = require('../models/post');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();//delete the database ready for new data

  Post.create([{
    title: 'Les Fleurs puff sleeve top',
    subtitle: 'Rayon by Rifle Paper Co',
    hero: 'https://kateevadesigns.files.wordpress.com/2017/05/img_2020-1.jpg?w=1640&h=624&crop=1',
    copy: 'Hey, look at me blogging about some stuff...'

  }, {
    title: 'Embroidered Betty Dress',
    subtitle: 'Floral lace dress hack',
    hero: 'https://kateevadesigns.files.wordpress.com/2018/08/img_7631.jpg?w=1640&h=624&crop=1',
    copy: 'Hey, look at me blogging about some stuff...'
  }], (err, records) => {
    if(err) console.log(err);
    console.log(`${records.length} posts created!`);
    mongoose.connection.close();
  });
});
