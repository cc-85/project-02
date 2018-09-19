const router = require('express').Router();
const postsController = require('../controllers/posts');
const registrationsController = require('../controllers/registrations');
const sessionsController = require('../controllers/sessions');
const accountsController = require('../controllers/accounts');
//IMPORTANT - this allows us to stop unauthenticated users
//accessing specific routes
const secureRoute = require('../lib/secureRoute');

router.route('/')
  .get(postsController.home);

router.get('/', (req, res) => res.render('home'));

router.route('/posts')
  .get(postsController.index)
  .post(secureRoute, postsController.create);

router.get('/posts/new', secureRoute, postsController.new);

router.route('/posts/:id')
  .get(postsController.show)
  .put(secureRoute, postsController.update)
  .delete(secureRoute, postsController.delete);

router.get('/posts/:id/edit', secureRoute, postsController.edit);

router.post('/posts/:id/comments', secureRoute, postsController.createComment);
router.delete('/posts/:id/comments/:commentId', secureRoute, postsController.deleteComment);

router.route('/register')
  .get(registrationsController.new)
  .post(registrationsController.create);

router.route('/login')
  .get(sessionsController.new)
  .post(sessionsController.create);

router.get('/logout', sessionsController.delete);

router.route('/account')
  .get(secureRoute, accountsController.show)
  .put(secureRoute, accountsController.update);

router.route('/account/:id')
  .delete(secureRoute, accountsController.delete);


router.get('/account/edit', secureRoute, accountsController.edit);

router.route('/*').all((req, res) => res.status(404).render('404'));

module.exports = router;
