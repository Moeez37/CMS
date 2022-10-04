const user=require('./auth');
const getdb=require('../utils/database').getdb();
exports.fetchby=(obj)=>
{
    const db=getdb();
    return db.collection('members').fetch(obj).toArray()
}