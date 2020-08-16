var express = require('express');
// const { use } = require('./login');
// const { check, validationResult } = require('express-validator');
var router = express.Router();

var login 	= require.main.require('./models/login');

router.get('/',function(req,res){
    if(req.session.status=='1')
    {
        res.render('admin/index'); 
    }
    else
    {
        res.redirect("/login");
    }
})

module.exports=router;