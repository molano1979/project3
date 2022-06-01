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
            <Link to="/search">
              <button
                type="button"
                className="btn btn-info log"
              >
              Find new segments
              </button>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
