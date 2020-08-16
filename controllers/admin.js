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
router.get('/Update/:id',function(req,res)
{
    if(req.session.status==1)
    {
        var user={
            username: req.params.id
        }
        login.get(user,function(result)
        {
            res.render('admin/update/index',{list:result});
        });
    }
    else
    {
        res.redirect('/login');
    }
    
});

router.post('/Update/:id',function(req,res)
{
    if(req.session.status==1)
    {
        var user=
        {
            password: req.body.password,
            name: req.body.name,
            phone: req.body.phone,
            username: req.body.username
        }
        login.update(user,function(result)
        {
            res.redirect('/admin/emplist');
        })
    }
    else
    {
        res.redirect('/login');
    }
})

router.get('/Delete/:id',function(req,res)
{
    if(req.session.status==1)
    {
        var user={
            username: req.params.id
        }
        login.get(user,function(result)
        {
            res.render('admin/delete/index',{list:result});
        });
    }
})
router.post('/delete/:id', function(req, res)
{
    if(req.session.status==1)
    {
        if(req.body.hasOwnProperty("YES"))
        {
            login.remove(req.params.id, function(result)
            {
                res.redirect('/admin/emplist');
            });
        }
    
        else if (req.body.hasOwnProperty("NO"))
        {
            res.redirect('/admin/emplist');
        }
    }
});


module.exports=router;