var express = require('express');
var router = express.Router();

var login 	= require.main.require('./models/login');

router.get('/',function(req,res)
{   
    if(req.session.status==2)
    {
        login.getproduct(function(result)
        {
            res.render('employee/productlist/index',{list:result});
        })  
    }
})

module.exports=router;