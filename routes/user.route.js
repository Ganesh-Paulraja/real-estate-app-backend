import express from 'express'
import {deleteUser, test, updateUserInfo, getUserListing} from '../controllers/usercontroller.js'
import { verifyUser } from '../utils/verifyUser.js';

const router = express.Router();
router.get('/test', test);
router.post('/update/:id', verifyUser, updateUserInfo);
router.delete('/delete/:id', verifyUser, deleteUser);
router.get('/listings/:id', verifyUser, getUserListing);

export default router;