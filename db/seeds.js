const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');

const Post = require('../models/post');
const User = require('../models/user');

mongoose.connect(dbURI, (err, db) => {
  //delete the database ready for new data
  db.dropDatabase(() => {

    User.create([{
      username: 'cc-85',
      email: 'caoimhepower@gmail.com',
      image: 'https://png.icons8.com/color/1600/guest-female.png',
      password: 'pass',
      passwordConfirmation: 'pass'
    }, {
      username: 'bob',
      email: 'bob@example.com',
      image: 'https://png.icons8.com/color/1600/manager.png',
      password: 'pass',
      passwordConfirmation: 'pass'
    }], (err, users) => {
      if(err) console.log(err);
      console.log('user created!');

      Post.create([{
        title: 'Les Fleurs puff sleeve top',
        subtitle: 'Rayon by Rifle Paper Co',
        hero: 'https://kateevadesigns.files.wordpress.com/2017/05/img_2020-1.jpg?w=1640&h=624&crop=1',
        copy: 'Hey, look at me blogging about some stuff...',
        user: users[0]
      }, {
        title: 'Embroidered Betty Dress',
        subtitle: 'Floral lace dress hack',
        hero: 'https://kateevadesigns.files.wordpress.com/2018/08/img_7631.jpg?w=1640&h=624&crop=1',
        copy: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        user: users[1]
      }], (err, records) => {
        if(err) console.log(err);
        console.log(`${records.length} posts created!`);
        mongoose.connection.close();
      });
    });
  });

});
