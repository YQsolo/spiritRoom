var express = require('express');
var router = express.Router();
var UserModel = require('../model/user')
/* GET home page. */
router.get('/', function(req, res) {
  	res.render('register',{error:false});
});
router.post('/',function(req,res){
	console.log(req.body);
	if(req.body.password.trim() == req.body.password2.trim() && req.body.password.trim() != ''){
		UserModel.create({
			name:req.body.user,
			email:req.body.email,
			password:req.body.password
		},function(error,info){
			if(!error){
				res.redirect("/login");
			}		
		})
	}
	else{
		res.render('register',{error:true});
	}
	
})

module.exports = router;
