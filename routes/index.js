var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/board', require('./board'));
router.use('/event', require('./event'));
router.use('/mypage', require('./mypage'));
router.use('/soldier', require('./soldier'));

module.exports = router;
