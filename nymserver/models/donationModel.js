import { query } from '../config/db.js';

export const addDonation = async ({ jina, kiasi, mawasiliano, tarehe, method }) => {
  const sql = 'INSERT INTO donations (jina, kiasi, mawasiliano, tarehe, method) VALUES ($1, $2, $3, $4, $5) RETURNING *';
  const params = [jina, kiasi, mawasiliano, tarehe, method];
  const result = await query(sql, params);
  return result.rows[0];
};

export const getDonations = async () => {
  const result = await query('SELECT * FROM donations ORDER BY tarehe DESC');
  return result.rows;
};
