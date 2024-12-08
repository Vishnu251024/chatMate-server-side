import express from 'express'
const router = express.Router();
import {signupUser, loginUser, logoutUser, getAllUsersExceptLoggedIn, getCurrentUser} from '../controllers/authControllers.js';
import authenticate from '../middlewares/authorization.js';

router.post('/signup',signupUser);
router.post('/login',loginUser);
router.post('/logout',authenticate,logoutUser);
router.get('/users',authenticate,getAllUsersExceptLoggedIn);
router.get('/me',authenticate,getCurrentUser);



export default router