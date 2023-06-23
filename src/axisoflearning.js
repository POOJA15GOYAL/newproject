import React, { useState, useEffect } from 'react';

const slidesData = [
  {
    id: 1,
    title: 'Learn from the best Entrepreneurs',
    content: 'An imersive discouse with iconic enterprises and the people behind them.Chosen for exceeding benchmarks and setting standards of excellence,these organizations are simultaneously leaving a measurable impact on the communities they serve and the nation at large',
    
  },
  {
    id: 2,
    title: 'Immerse in Sector Solutions',
    content: 'A forum for interaction with some of the most reowned personalities from a range of high-impact fields inour chosen setors,engaging participats in discussions of a broder national importance.',
    
  },
  {
    id: 3,
    title: 'Create your own business plan',
    content: 'A competion for the yatris to create business plans addressing the challenges of middle india under the expert guidance of our mentors. Pitch your ideas to a jury and get support through our incubation.',
    
  },
];

const Axisoflearning = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="axis">
      <div className="axisheading"><h3>LEARNING CONTINUUM</h3></div>
      <p className="axisp">Join us for a wide range of experiences to foster,nurture and actualize the spirit of entrepreneurship</p>
    <div className="axisoflearning">
      
      <h3 className="learninghead">{slidesData[currentSlide].title}</h3>
      <br></br>
      <p className="learingcontent">{slidesData[currentSlide].content}</p>
    </div>
    {/* <div className="axisoflearning2">
    
    <h3 className="learninghead2">{slidesData[currentSlide].title}</h3>
    <p className="learingcontent2">{slidesData[currentSlide].content}</p>
  </div> */}
    </div>
    
  </>
  );
};

export default Axisoflearning;