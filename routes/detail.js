var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({dest:'public/uploads/'})
var ListModel = require('../model/list');

router.get('/:_id', function(req, res) {
   console.log(req.params._id);
  	if(req.session.admin){
  		ListModel.find({ 
  			_id:req.params._id
  		},function(error,info){
  			if(!error){
  				console.log(info);
  				res.render('detail',{content:info});
  			}
  		});
  	}
	else{
		res.redirect("/login");
	}
});
router.get('/delete/:_id',function(req,res){
	//ArticleModel.
	//console.log(req.params._id);
	ListModel.findByIdAndRemove(req.params._id,function(error,info){
		if(!error){
  			res.redirect("/");
		}	
	})
})
router.get('/update/:_id',function(req,res){
	ListModel.find({_id:req.params._id},function(error,info){
			if(!error){
				console.log(info);
				res.render('productsToAdd',{isnew:false,content:info});
			}
		})
	});
router.post("/update",upload.single('file',1),function(req,res){
	console.log(req.body);
	ListModel.findByIdAndUpdate(req.body.id,{$set:{
		name:req.body.name,    
		type:req.body.type,
		price:req.body.price,
		intro:req.body.intro,
		remark:req.body.remark,
		filepath:req.file?`/uploads/${req.file.filename}`:``
	}},function(error,info){
		if(!error){
			console.log(info);
			res.redirect("/");
		}
	})
})
module.exports = router;
