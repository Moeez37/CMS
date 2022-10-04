const path=require('path');
const { isUndefined } = require('util');
const _=require('lodash');
const user = require('../models/auth');

exports.registeruser=(req,res,next)=>{
    const name=req.body.name+' '+req.body.last_name;
    const email=req.body.email;
    const password=req.body.pswd;
    const catagory=req.body.cat;
    users= new user({
      username:req.body.name+' '+req.body.last_name,
      email:req.body.email,
      password:req.body.pswd,
      catagory:req.body.cat
    });
    console.log(users);
users.save()
.then(text=>{
    console.log(text);
    req.session.islogin=true;
    req.session.obj=users;
    res.render('home')
 })
 .catch(error=>{
  console.log(error) ; 
  res.render('signup',
    {
      obj:req.session.obj,
      editing:false,
      title:'Signup'
      ,image:'./img/images.jpg',
      comment:true,
      output:'This Email Already Exist!!'});
 
});
}

exports.preregister=(req,res,next)=>{
  if(!req.session.islogin)
  {
  res.render('signup',{
    editing:false,
    title:'Signup',
    comment:false
    ,output:" "
 });
}
else{
    res.render('home' )
}
}

exports.prelogin=(req,res)=>{
  console.log(req.session.islogin);
 if(!req.session.islogin||_.isUndefined(req.session.islogin)){
  res.render('./login',{
    title:"Login",
    comment:false,
    output:"smooth"
  });
}
else{
  res.render('./home',{
    title:"Login",
    comment:false,
    output:"smooth"
  });
}
}

exports.credentials=(req,res,next)=>{
  const Email=req.body.email

  
user.findOne({email:Email})
  .then(user=>{ 
    if(user['password']==req.body.password)
    {
      req.session.obj=user;
      console.log(req.session.obj)
        req.session.islogin=true;
        res.render('home'); 
    }
  })
    .catch(err=>

    {
      console.log(err);
      res.render('login',{
        title:"Login",
        comment:true,
        output:"Password Did'nt match"
      });
    });
}

 