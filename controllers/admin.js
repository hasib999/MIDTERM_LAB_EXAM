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
            var errors = validationResult(req);
            res.render('admin/update/index',{list:result});
        });
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
module.exports=router;