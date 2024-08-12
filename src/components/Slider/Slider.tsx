import React, { useRef } from 'react';
import './Slider.css';

const Slider = () => {
  const slideRef = useRef();

  const handleNext = () => {
    const items = slideRef.current.querySelectorAll('.item');
    slideRef.current.appendChild(items[0]);
  };

  const handlePrev = () => {
    const items = slideRef.current.querySelectorAll('.item');
    slideRef.current.prepend(items[items.length - 1]);
  };

  return (
    <div className="slider-container">
      <div className="slide" ref={slideRef}>
        {[
          {
            name: 'Switzerland',
            des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
            img: 'https://i.ibb.co/qCkd9jS/img1.jpg',
          },
          {
            name: 'Finland',
            des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
            img: 'https://i.ibb.co/jrRb11q/img2.jpg',
          },
          {
            name: 'Iceland',
            des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
            img: 'https://i.ibb.co/NSwVv8D/img3.jpg',
          },
          {
            name: 'Australia',
            des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
            img: 'https://i.ibb.co/Bq4Q0M8/img4.jpg',
          },
          {
            name: 'Netherlands',
            des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
            img: 'https://i.ibb.co/jTQfmTq/img5.jpg',
          },
          {
            name: 'Ireland',
            des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
            img: 'https://i.ibb.co/RNkk6L0/img6.jpg',
          },
        ].map((item, index) => (
          <div
            key={index}
            className="item"
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <div className="content">
              <div className="name">{item.name}</div>
              <div className="des">{item.des}</div>
              <button>See More</button>
            </div>
          </div>
        ))}
      </div>

      <div className="button">
        <button className="prev" onClick={handlePrev}>
          LEFT
        </button>
        <button className="next" onClick={handleNext}>
          RIGHT
        </button>
      </div>
    </div>
  );
};

export default Slider;
