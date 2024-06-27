import express from 'express'
import {test, updateUserInfo} from '../controllers/usercontroller.js'
import { verifyUser } from '../utils/verifyUser.js';

const router = express.Router();
router.get('/test', test);
router.post('/update/:id', verifyUser, updateUserInfo);
// router.post('/update/:id', verifyUser);

export default router;