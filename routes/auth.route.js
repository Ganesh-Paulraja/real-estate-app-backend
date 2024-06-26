import express from 'express'
// import user from '../models/user.model.js';
import { google, signOut, signin, signup } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', signup)
router.post('/signin', signin)
router.post('/google', google)
router.get('/signout', signOut)

// router.get('/signup', (req, res) => {
//   console.log(User.find());
// })

export default router;