
import { Link } from "react-router-dom";
import React, { useState } from 'react';

  const Welcome = () => {
  
    if (loading) return "Loading..."
    if (error) return "Loading..."
  return (
    <>
    <div className="error_page">
      <div
        className="hero bg-image"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/img/1.jpg"})`,
        }}
      >
        <div className="content">
          <h1 data-aos="fade-up" data-aos-duration="1200">
            Welcome!
          </h1>
          <p data-aos="fade-up" data-aos-duration="1200" data-aos-delay="50">
            Login for more functions
          </p>

          <div
            className="button"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <Link to="/search">Find new segments</Link>
          </div>

        </div>
      </div>

    </div>
      
    </>
  );
}

export default Welcome;
