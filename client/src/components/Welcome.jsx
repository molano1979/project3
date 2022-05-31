
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
          backgroundImage: `url(${process.env.PUBLIC_URL + "/img/mainbg@2x.png"})`,
        }}
      >
        <div className="content">
          <h1 data-aos="fade-up" data-aos-duration="1200">
          <img id="logo-align" src= '../img/logo_dark@3x.png' alt="Example Hill" />
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
