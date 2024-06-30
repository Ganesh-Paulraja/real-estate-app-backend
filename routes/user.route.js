import express from 'express'
import {deleteUser, test, updateUserInfo} from '../controllers/usercontroller.js'
import { verifyUser } from '../utils/verifyUser.js';

const router = express.Router();
router.get('/test', test);
router.post('/update/:id', verifyUser, updateUserInfo);
router.delete('/delete/:id', verifyUser, deleteUser);

export default router;