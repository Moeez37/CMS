// const { map } = require('lodash');
const mongo=require('mongoose');
const schema=mongo.Schema;

const user_schema=new schema(
    {
        username:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        catagory:{
            type:String,
            required:true
        }
    }
)
module.exports=mongo.model('members',user_schema);



// const promise=require('promise');
// const { findLastIndex } = require('lodash');
// const mongodb=require('mongodb')
// const getdb = require('../utils/database').getdb;
// class user{
//      static x=0;
//     constructor(username,password,email,catagory){
//         this.username=username;
//         this.password=password;
//         this.email=email;
//         this.catagory=catagory;
//         this.attendance=new Map();
//     }
//    static increment()
//     {
//         return user.x=user.x+1
//     }
//     save(){
//         const db=getdb();
//         return new promise((myResolve, myReject)=>{
//         db.collection('members').find({'email':this.email}).toArray()
//              .then(User=>{
//         if(User.length==0)
//         {
//             db.collection('Attendance').insertOne({'email':this.email})
//         .then(text=>{
//             console.log(text)
//             this.attendance.set("attendance",text.insertedId.toString());
//             db.collection('grade').insertOne({'email':this.email})
//             .then(id=>{
//                 console.log(id);
//                this.attendance.set("grade",id.insertedId.toString());
//             })
//             .catch(err=>{
//                 myReject("false")
//                 console.log(err);
//                 console.log("false 0")
//                 return false;
//             })
//         })
//         .catch(err=>{
//             console.log(err);
//             console.log("false 1")
//             return false;
//         });
//         db.collection('members').insertOne(this).then(text=>{
//             console.log('added successfully')
//             console.log("true 0")
//             myResolve("true");
//             return true;
//         })
//         .catch((err)=>{
//             console.log(err);
//             console.log("false 2")
//             myReject("false")
//             return false;
//         })}
//         else{
//             myReject("false")
//             console.log("else");
//           return false;            
//         }

//        })
//        .catch(err=>
//         {myReject("false")
//             console.log("check error");
//             return false;
//         })
//     })
//     }

       
//     fetchuser(userID){
//         const db=getdb();
//         return db.collection('members').find({email : userID}).next()
//     }
//     profile()
//     {
     
//     }
// }
// module.exports=user;