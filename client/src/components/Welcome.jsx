import { Link } from 'react-router-dom';
import React from 'react';

function Welcome() {
  return (
    <div className="welcome_page">
      <div
        className="hero bg-image"
        style={{
          backgroundImage: `url(${
            `${process.env.PUBLIC_URL}/img/mainbg.svg`
          })`,
        }}
      >
        <div className="content">
          <h1 data-aos="fade-up" data-aos-duration="1200">
            <img
              id="logo-align"
              src="../img/logo_dark.svg"
              alt="Cardiac arrest app logo"
            />
          </h1>
          <p data-aos="fade-up" data-aos-duration="1200" data-aos-delay="50">
            Welcome!
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
  );
}

export default Welcome;
