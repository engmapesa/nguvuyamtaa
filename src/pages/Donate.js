import React, { useState } from 'react';
import axios from 'axios';

const Donate = () => {
  const [formData, setFormData] = useState({
    jina: '',
    kiasi: '',
    mawasiliano: '',
    method: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/donations', formData);
      setMessage('Asante kwa mchango wako!');
      setFormData({ jina: '', kiasi: '', mawasiliano: '', method: '' });
    } catch (error) {
      console.error(error);
      setMessage('Tatizo limetokea. Tafadhali jaribu tena.');
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4 text-center">Changia Maendeleo ya Jamii</h3>
      {message && <div className="alert alert-info">{message}</div>}

      <form onSubmit={handleSubmit} className="p-4 border rounded shadow bg-light">
        <div className="mb-3">
          <label className="form-label">Jina</label>
          <input
            type="text"
            name="jina"
            value={formData.jina}
            onChange={handleChange}
            className="form-control"
            placeholder="Ingiza jina lako"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Kiasi</label>
          <input
            type="number"
            name="kiasi"
            value={formData.kiasi}
            onChange={handleChange}
            className="form-control"
            placeholder="Kiasi cha mchango"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Mawasiliano</label>
          <input
            type="text"
            name="mawasiliano"
            value={formData.mawasiliano}
            onChange={handleChange}
            className="form-control"
            placeholder="Simu au Email"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Njia ya Malipo</label>
          <select
            name="method"
            value={formData.method}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="">Chagua Njia</option>
            <option value="Cash">Cash</option>
            <option value="Mpesa">Mpesa</option>
          </select>
        </div>

        <button type="submit" className="btn btn-success w-100">
          Tuma Mchango
        </button>
      </form>
    </div>
  );
};

export default Donate;
