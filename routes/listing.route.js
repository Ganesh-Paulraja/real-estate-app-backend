import express from 'express'
import { verifyUser } from '../utils/verifyUser.js';
import { createListing, deleteListing, updateListing, getLising } from '../controllers/listing.controller.js';

const router = express.Router();

router.post('/create', verifyUser, createListing);
router.delete('/delete/:id', verifyUser, deleteListing)
router.post('/update/:id', verifyUser, updateListing)
router.get('/get/:id', getLising);

export default router;