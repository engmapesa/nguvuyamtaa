import express from 'express';
import { createDonation, fetchDonations } from '../controllers/donationController.js';

const router = express.Router();

router.post('/', createDonation);
router.get('/', fetchDonations);

export default router;
