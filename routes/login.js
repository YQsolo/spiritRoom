var express = require('express');
var router = express.Router();
var session = require('express-session');

var UserModel = require('../model/user');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('login',{user_show:false});
});
router.post('/', function(req, res) {
	console.log(req.body)
  UserModel.find({
	    email:req.body.email,
	    password:req.body.password
  	},function(error,info){
	    if(!error){
			if(info.length>0){
				req.session.admin = info[0];
				res.redirect('/');
			}
			else{
			res.render('login',{user_show:true});
			}
	    }
  	})
});


module.exports = router;



