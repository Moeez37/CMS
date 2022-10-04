const bodyParser = require('body-parser');
const express = require('express');
const app=express();
const auth=require('./routes/auth');
const home=require('./routes/home');
const mongoConnect=require('./utils/database').mongoConnect;
const mongo=require('mongoose');
const path=require('path');
const session=require('express-session');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({secret:'CMS',resave:false,saveUninitialized:false}));
app.set('view engine','ejs');
app.set('views','views');
app.use(express.static(path.join(__dirname,'public')));
app.use('/home',home);
app.use(auth);

//app.use('/student',student);
mongo.connect("mongodb+srv://Moeez:bsef19a537@cluster0.076ljp2.mongodb.net/members?retryWrites=true&w=majority")
.then(result=>{
   app.listen(3000);
})
.catch(err=>{
   console.log(err);
})