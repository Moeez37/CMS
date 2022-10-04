const path=require('path');
const auth=require('./auth');
const user=require('../models/auth');
exports.profile=(req,res)=>{
  console.log(req.session.islogin);
  if(req.session.islogin){
    res.render('signup', {
    obj:req.session.obj,
    editing:true,
    title:'Update',
    image:'./img/images.jpg',
    comment:false,
    output:'This Email Already Exist!!'
  })
}else{
  res.render('login',{
    title:'Login',
    comment:true,
    output:'login again'
  });
}   
};
exports.logout=(req,res,next)=>
{
  if(req.session.islogin){
  console.log('logout')
  req.session.islogin=false;
  res.render('login',{
    title:'Login',
    comment:false,
    output:'smooth'
  });
}
else{
  res.render('login',{
    title:'Login',
    comment:false,
    output:'smooth'
  });
}
}
exports.teachers=(req,res,next)=>{

user.fetchuser({catagory:"teachers"})
}