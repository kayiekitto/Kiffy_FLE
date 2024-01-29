import React from 'react';
import greeting1 from './../img/greeting1.png';
import greeting2 from './../img/greeting2.png';

function Greeting() {
  return (
    <div>
      <div className="greeting">
        <img className="left-image" src={greeting2} alt="Left Image" />
        <div className="greeting-content">
          <img className="center-image" src={greeting1} alt="Welcome Image" />
          <h1>Welcome to our school!</h1>
          <p>
            Ilocos Sur Polytechnic State College, where excellence meets
            opportunity! Our institution is dedicated to providing quality
            education, fostering innovation, and preparing students for a
            successful future. Explore a vibrant learning community that
            embraces diversity, encourages creativity, and empowers individuals
            to achieve their aspirations. Join us on a journey of knowledge,
            growth, and endless possibilities at Ilocos Sur Polytechnic State
            College!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Greeting;
