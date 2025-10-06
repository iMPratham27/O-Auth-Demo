import express from 'express';
import { googleLogin, logoutUser, userInfo } from '../controller/authController.js';
import { verifyToken } from '../middleware/verifyToken.js';

export const router = express.Router();

router.get('/google', googleLogin);

router.post('/logout', logoutUser);

router.get('/userInfo', verifyToken, userInfo);