var express = require('express');
var router = express.Router();

var login 	= require.main.require('./models/login');

router.get('/',function(req,res)
{
    if(req.session.status==2)
    {
        res.render('employee/addproduct/index');
    }
})

router.post('/',function(req,res)
{
    var info=
    {
        name: req.body.name,
        quantity: req.body.quantity,
        price: req.body.price,
    }
    if(req.session.status==2)
    {
        login.addproduct(info,function(result)
        {
            res.redirect('/employee/productlist');

        })
    }

})

module.exports=router;