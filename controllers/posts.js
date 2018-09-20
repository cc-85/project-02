const Post = require('../models/post');

function homeRoute(req, res) {
  Post.find().sort({ createdAt: -1 }).populate('user').limit(3).exec((err, posts) => {
    res.render('home', { posts });
  });
}

function indexRoute(req, res) {
  // if there is a search in the querystring
  // create a regular expression to use in the find method
  const query = {};
  if(req.query.search) query.title = new RegExp(req.query.search, 'i');

  Post.find(query).sort({ title: 1 }).populate('user').exec((err, posts) => {
    res.render('posts/index', { posts, search: req.query.search });
  });
}

function showRoute(req, res) {
  Post.findById(req.params.id)
    .populate('user comments.user')
    .exec((err, post) => {
      res.render('posts/show', { post });
    });
}

function newRoute(req, res) {
  res.render('posts/new');
}

function createRoute(req, res) {
  //req.body contains form data, because body-parser puts it there
  //without body-parser there is no req.body!!!!!!!!!!!!!!!
  //sets the currently logged in user to the comment database
  //this is possible because of `lib/auth.js`
  req.body.user = req.currentUser;
  Post.create(req.body, (err) => {
    console.log(err);
    res.redirect('/posts');
  });
}

function editRoute(req, res) {
  Post.findById(req.params.id, (err, post) => {
    res.render('posts/edit', { post });
  });
}

function updateRoute(req, res) {
  //we cannot make PUT requests without method-Override
  //without method-override this route will never work!!!!!!!!! 💥
  Post.findById(req.params.id, (err, post) => {
    post.set(req.body);
    post.save(() => {
      res.redirect(`/posts/${req.params.id}`);
    });
  });
}

function deleteRoute(req, res) {
  //we cannot make DELETE requests without method-Override
  //without method-override this route will never work!!!!!!!!! 💥
  Post.findById(req.params.id, (err, post) => {
    post.remove(() => {
      res.redirect('/posts');
    });
  });
}

//POST /posts/:id/comments
function createCommentRoute(req, res) {
  //sets the currently logged in user to the comment database
  //this is possible because of `lib/auth.js`
  req.body.user = req.currentUser;
  //find posts we want to add comment to
  Post.findById(req.params.id, (err, post) => {
    //add form data to the comments array of the posts
    post.comments.push(req.body);
    //save the post
    post.save(() => {
      //redirect to SHOW page which should display the new comment
      res.redirect(`/posts/${req.params.id}`);
    });
  });
}

function deleteCommentRoute(req, res) {

  //find the post
  Post.findById(req.params.id, (err, post) => {
    //ensures only creator can delete a comment
    const comment = post.comments.id(req.params.commentId);
    if(!comment.user || !req.currentUser._id.equals(comment.user)) {
      //remove the comments
      return res.redirect(`/posts/${req.params.id}`);
    }
    //find the comments
    comment.remove();
    //save the post
    post.save(() => {
      //redirect to the SHOW page which should now not have that comment
      res.redirect(`/posts/${req.params.id}`);
    });
  });
}

module.exports = {
  home: homeRoute,
  index: indexRoute,
  show: showRoute,
  new: newRoute,
  create: createRoute,
  edit: editRoute,
  update: updateRoute,
  delete: deleteRoute,
  createComment: createCommentRoute,
  deleteComment: deleteCommentRoute
};
