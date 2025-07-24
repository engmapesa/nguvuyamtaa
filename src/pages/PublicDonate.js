import React from 'react';

const PublicDonate = () => {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h2 className="mb-4 text-danger fw-bold">Changia Kupitia MPESA</h2>
        <p className="fs-5">Tafadhali tumia namba ifuatayo kuchangia:</p>

        <div className="p-4 bg-danger text-white rounded shadow-lg d-inline-block">
          <h4 className="mb-2">MPESA Number</h4>
          <h3 className="fw-bold">0743 999 431</h3>
          <p className="mb-0">Jina: <strong>Sospeter Msuka</strong></p>
        </div>

        <div className="mt-4">
          <p className="text-muted fst-italic">Asante kwa mchango wako, unasaidia kuleta mabadiliko!</p>
        </div>
      </div>
    </div>
  );
};

export default PublicDonate;
