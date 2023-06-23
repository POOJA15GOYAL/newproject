import React, { useState, useEffect } from 'react';

const slidesData = [
  {
    id: 1,
    title: 'APJ ABDUL KALAM',
    content: 'Winners are not those who never fail, but those who never quit.',
    image: "./images/jeeva-artist-09isro.jpg"
  },
  {
    id: 2,
    title: 'RATAN TATA',
    content: 'I dont believe in taking right decisions. I take decisions and then make them right',
    image: "https://www.tata.com/content/dam/tata/images/about-us/Desktop/heritage/ratan-tata/ratan_tata_banner_desktop_1920x1080.jpg"
  },
  {
    id: 3,
    title: 'AZIM PREMJI',
    content: 'Success is achieved twice. First in the mind, then in the real world.',
    image:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202012/Anniv-Azim-Premji-7_1200x768.jpeg?size=1200:675"
  },
];

const Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <img src = {slidesData[currentSlide].image} alt = "image" className="messgaesimage"/>
      <h3 className="messagehead">{slidesData[currentSlide].title}</h3>
      <p className="messagecontent">{slidesData[currentSlide].content}</p>
    </div>
  );
};

export default Slides;