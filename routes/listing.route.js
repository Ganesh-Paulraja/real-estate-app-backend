import express from 'express'
import { verifyUser } from '../utils/verifyUser.js';
import { createListing, deleteListing, updateListing, getListing, getListings } from '../controllers/listing.controller.js';

const router = express.Router();

router.post('/create', verifyUser, createListing);
router.delete('/delete/:id', verifyUser, deleteListing)
router.post('/update/:id', verifyUser, updateListing)
router.get('/get/:id', getListing);
router.get('/getList', getListings);

export default router;