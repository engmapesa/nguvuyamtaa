import { addDonation, getDonations } from '../models/donationModel.js';

export const createDonation = async (req, res) => {
  try {
    const { jina, kiasi, mawasiliano, tarehe, method } = req.body;

    if (!jina || !kiasi || !method) {
      return res.status(400).json({ message: 'Required fields are missing' });
    }

    const newDonation = await addDonation({ jina, kiasi, mawasiliano, tarehe, method });
    res.status(201).json(newDonation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const fetchDonations = async (req, res) => {
  try {
    const donations = await getDonations();
    res.status(200).json(donations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
