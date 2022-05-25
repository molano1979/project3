import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
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
            <Link to="/favorites">Check out popular segments</Link>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Welcome