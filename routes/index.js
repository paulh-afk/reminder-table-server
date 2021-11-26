const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.json('Hello, world !');
});

router.get('*', (req, res, next) => {
  res.redirect('/');
});

module.exports = router;
