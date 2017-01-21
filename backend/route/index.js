var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.use("/company", require('./company-router.js'));
router.use("/user", require('./user-router.js'));
router.use("/comment", require('./comment-router.js'));

module.exports = router;
