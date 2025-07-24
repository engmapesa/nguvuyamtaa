import React from 'react';
import image1 from '../images/road1.jpg';
import image2 from '../images/road2.jpg';
import image3 from '../images/road3.jpg';
import image4 from '../images/road4.jpg';
import image5 from '../images/road5.jpg';
import image6 from '../images/road6.jpg';
import image7 from '../images/road7.jpg';


const Reports = () => {
  const images = [
    { src: image1, caption: 'Hali ya barabara zetu' },
    { src: image2, caption: 'Hali ya barabara zetu' },
    { src: image3, caption: 'Hali ya barabara zetu' },
    { src: image4, caption: 'Hali ya barabara zetu' },
    { src: image5, caption: 'Hali ya barabara zetu' },
    { src: image6, caption: 'Hali ya barabara zetu' },
    { src: image7, caption: 'Hali ya barabara zetu' }
  ];

  return (
    <div className="container">
      <h2 className="text-success ">Ripoti za Ujenzi</h2>
      <p>
        Hapa utaona ripoti za maendeleo ya barabara ikiwemo picha za ujenzi, hatua zilizofikiwa, 
        na matumizi ya fedha. Tutaweka updates kutoka kwa kamati ya ujenzi.
      </p>

      {/* Bootstrap Carousel */}
      <div id="roadCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner rounded shadow">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <img
                src={image.src}
                className="d-block w-100"
                alt={`Slide ${index + 1}`}
                style={{ maxHeight: '400px', objectFit: 'cover' }}
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
                <p className="text-white">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#roadCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#roadCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Optional notice */}
      <div className="alert alert-info mt-4">
        Hakuna ripoti nyingine kwa sasa. Tafadhali tembelea tena baadaye.
      </div>
    </div>
  );
};

export default Reports;
