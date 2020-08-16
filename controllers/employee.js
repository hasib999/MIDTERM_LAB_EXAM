var express = require('express');
// const { check, validationResult } = require('express-validator');
var router = express.Router();

var login 	= require.main.require('./models/login');

router.get('/',function(req,res)
{
    if(req.session.status == 2)
    {
        res.render('employee/index');
    }
    else
    {
        res.redirect("/login");
    }
})

router.get('/update/:id',function(req,res)
{
    if(req.session.status==2)
    {
        var user={
            id: req.params.id
        }
        login.getp(user,function(result)
        {
            res.render('employee/update/index',{list:result});
        });
    }
    else
    {
        res.redirect('/login');
    }
    
});

router.post('/update/:id',function(req,res)
{
    if(req.session.status==2)
    {
        var info=
        {
            id: req.body.id,
            name: req.body.name,
            quantity: req.body.quantity,
            price: req.body.price
        }
        login.updatep(info,function(result)
        {
            res.redirect('/employee/productlist');
        })
    }
    else
    {
        res.redirect('/login');
    }
})


router.get('/delete/:id',function(req,res)
{
    if(req.session.status==2)
    {
        var user={
            id: req.params.id,
            name: req.body.name,
            price:req.body.price
        }
        login.getp(user,function(result)
        {
            res.render('employee/delete/index',{list:result});
        });
    }
})
router.post('/delete/:id', function(req, res)
{
    if(req.session.status==2)
    {
        if(req.body.hasOwnProperty("YES"))
        {
            login.removep(req.params.id, function(result)
            {
                res.redirect('/employee/productlist');
            });
        }
    
        else if (req.body.hasOwnProperty("NO"))
        {
            res.redirect('/employee/productlist');
        }
    }
});


module.exports=router;