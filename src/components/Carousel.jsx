import React, { useState, useEffect } from 'react';
import imagesData from './../data/carousel.json';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleChangeSlide = (slideNumber) => {
    setCurrentSlide(slideNumber);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the current slide, reset to 1 if it exceeds the total number of slides
      setCurrentSlide((prevSlide) => (prevSlide % imagesData.length) + 1);
    }, 5000); // Change slide every 5000 milliseconds (5 seconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="row">
      <div className="col-12">
        <div className="carousel">
          <ul className="slides">
            {imagesData.map((image, index) => (
              <React.Fragment key={index}>
                <input
                  type="radio"
                  name="radio-buttons"
                  id={`img-${image.id}`}
                  checked={currentSlide === image.id}
                  onChange={() => handleChangeSlide(image.id)}
                />
                <li className="slide-container">
                  <div className="slide-image">
                    <img src={image.src} alt={`Slide ${image.id}`} />
                  </div>
                  <div className="carousel-controls">
                    <label
                      htmlFor={`img-${(image.id - 2 + imagesData.length) % imagesData.length + 1}`}
                      className="prev-slide"
                    >
                      <span>&lsaquo;</span>
                    </label>
                    <label
                      htmlFor={`img-${image.id % imagesData.length + 1}`}
                      className="next-slide"
                    >
                      <span>&rsaquo;</span>
                    </label>
                  </div>
                </li>
              </React.Fragment>
            ))}
          </ul>
          <div className="carousel-dots">
            {imagesData.map((image, index) => (
              <label key={index} htmlFor={`img-${image.id}`} className={`carousel-dot ${currentSlide === image.id ? 'active' : ''}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
