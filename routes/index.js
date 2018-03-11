var express = require('express');
var router = express.Router();
var ListModel = require('../model/list');
/* GET home page. */
router.get('/', function(req, res, next) {
	if(req.session.admin){
		ListModel.find({},function(error,info){
			res.render('index',{sname:req.session.admin.name,content:info});
		})
	}
	else{
		res.redirect("/login");
	}
});

module.exports = router;
