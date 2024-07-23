import express from 'express'
const router=express.Router();
import {registerUser,authUser,jwtVerify } from '../controllers/userControllers.js'
import upload from '../middlewares/multerMiddleware.js';
import jwtAuthMiddleware from '../middlewares/jwtAuthMiddleware.js';
// import { jwtVerify } from '../controllers/userControllers.js';



router.route('/').post(

    
    upload.fields([
        {
            name:"avtar",
            maxCount:1,

        }

    ]),

    registerUser);

router.post('/login',authUser)
router.get('/jwt',jwtAuthMiddleware,jwtVerify)


export default router;
