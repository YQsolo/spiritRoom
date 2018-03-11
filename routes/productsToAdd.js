var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({dest:'public/uploads/'})
var ListModel = require('../model/list');

/* GET home page. */
router.get('/', function(req, res) {
	if(req.session.admin){
  		res.render('productsToAdd',{isnew:true});
	}
	else{
		res.redirect("/login");
	}
});
router.post('/',upload.single('file',2),function(req,res){
	ListModel.create({
		name:req.body.name,
		type:req.body.type,
		price:req.body.price,
		intro:req.body.intro,
		remark:req.body.remark,
		filepath:req.file?`/uploads/${req.file.filename}`:``
	},function(error,info){
		if(!error){
			console.log(info);
			res.redirect('/');
		}
	})
});

module.exports = router;
