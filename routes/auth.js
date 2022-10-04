const express=require('express');

const router= express.Router();

const auth=require('../controller/auth');

router.use('/signup',auth.registeruser);
router.get('/prelogin',auth.prelogin);
router.post('/login',auth.credentials);
router.get('/',auth.preregister);

module.exports=router;