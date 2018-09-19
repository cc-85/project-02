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
      image: 'https://instagram.flhr2-1.fna.fbcdn.net/vp/ddf313587d10401b8941c714cba93298/5C18D885/t51.2885-19/s150x150/26397835_2079741798904414_3038168670149804032_n.jpg',
      password: 'pass',
      passwordConfirmation: 'pass'
    }, {
      username: 'bob',
      email: 'bob@example.com',
      image: 'https://instagram.flhr2-1.fna.fbcdn.net/vp/d918e4c3bc91014fbfece773143fcf0c/5C1DB157/t51.2885-19/s320x320/32164113_167641210743784_1932018517582807040_n.jpg',
      password: 'pass',
      passwordConfirmation: 'pass'
    }], (err, users) => {
      if(err) console.log(err);
      console.log('user created!');

      Post.create([{
        title: 'Five tips for accurate sewing',
        subtitle: 'Handy hints sewing with precision',
        hero: 'https://images.unsplash.com/photo-1524224971825-8c690dec4b7c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=46ecbd296080ca90132bdc7522c8de1f&auto=format&fit=crop&w=1500&q=80',
        copy: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        user: users[0]
      }, {
        title: 'Ten tips for tip top topstitching',
        subtitle: 'Getting your topstitching looking top notch',
        hero: 'https://image.ibb.co/hNwLKz/topstitching_image.png',
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
