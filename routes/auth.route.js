import express from 'express'
// import user from '../models/user.model.js';
import { signup } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', signup)

// router.get('/signup', (req, res) => {
//   console.log(User.find());
// })

export default router;