import express from 'express'
const router=express.Router();
import {registerUser,authUser,jwtVerify,userInfo,allUsers,sendFriendRequest,friendRequests,RespondFriendRequest,sendChatList} from '../controllers/userControllers.js'
import upload from '../middlewares/multerMiddleware.js';
import jwtAuthMiddleware from '../middlewares/jwtAuthMiddleware.js';
// import { jwtVerify } from '../controllers/userControllers.js';



router.route('/register').post(

    
    upload.fields([
        {
            name:"avtar",
            maxCount:1,

        }

    ]),

    registerUser);

router.post('/login',authUser)
router.get('/jwt',jwtAuthMiddleware,jwtVerify);
router.get('/info/:userId',userInfo);
router.get('/allusers/:userId',allUsers)
router.post('/addfriend',sendFriendRequest);
router.get('/requests/:userId',friendRequests)
router.post('/respondrequest',RespondFriendRequest);
router.get('/chatlist/:userId',sendChatList);



export default router;
