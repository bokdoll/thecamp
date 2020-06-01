var express = require('express');
var router = express.Router();
const controller = require('../controllers/soldier');

router.get('/', controller.getSoldier);

module.exports = router;