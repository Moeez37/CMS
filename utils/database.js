const mongodb=require('mongodb');
const MongoClient=mongodb.MongoClient;

let d_b;
const mongoConnect=(callback)=>{
    const url="mongodb+srv://Moeez:bsef19a537@cluster0.076ljp2.mongodb.net/members?retryWrites=true&w=majority";
    console.log(url);
    MongoClient.connect(url)
    .then((client)=>{
        console.log('Connected');
        d_b=client.db();
        callback();
    })
    .catch(err=>{
        console.log('catch users');
        console.log(err);
    });
};
const getdb=()=>
 {
    if(d_b)
    {
        return d_b;
    }
    else{
        throw "NO database found";
    }
 }
exports.mongoConnect=mongoConnect;
exports.getdb=getdb;
