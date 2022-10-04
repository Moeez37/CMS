const express=require('express');
const router=express.Router();
const home=require('../controller/home');

router.get('/profile',home.profile);
router.get('/logout',home.logout);
// router.get('/teachers',home.teachers);
// router.get('/Courses',home.Courses);
// router.get('/Assignments',home.Assignments);
// router.get('/Notification-board',home.Notification-board);
// router.get('/Topper',home.Topper);
// router.post('/');

module.exports=router;