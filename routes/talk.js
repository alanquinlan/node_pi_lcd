var express = require('express');
var router = express.Router();

/* GET talk listing. */
router.get('/', function(req, res, next) {
	res.render('talk', { title: 'Talk to me..' });
});

module.exports = router;
