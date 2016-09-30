var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'GreenCart' });
});
/* Get Hello world page*/
router.get('/helloworld', function(req, res){
	res.render('helloworld', { title: 'GreenCart' });
});
/*Get Userlist page
router.get('/userlist', function(req, res){
	var db = req.db;
	var collection = db.get('usercollection');
	collection.find({},function(e,docs){
		res.render('userlist', {
			"userlist" : docs
		});
	});
});
/* GET Userlist page. */
router.get('/userlist', function(req, res) {
    var db = req.db;
  var collection = db.get('usercollection');
   collection.find({},{},function(e,docs){
        res.render('userlist', {
            "userlist" : docs
       });
    });
    //res.render('userlist', { title: 'Userlist' });
});

module.exports = router;
