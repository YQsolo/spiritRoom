//创建一个模型 对于数据库中的集合.
//将来通过模型操作集合,增删改查文档

var mongoose = require("mongoose");
//计划
var Schema = mongoose.Schema;

var obj = {
	name:String,
	email:String,
	password:String
}

var model = mongoose.model("userdemo",new Schema(obj));

//model 将来就可以操作 userdemos 这个集合.

module.exports = model;