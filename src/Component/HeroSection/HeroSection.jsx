import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="wrapper">
            <h2
              className="heading typed-text"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="50"
            >
              <Typewriter
                words={[
                  "Cultivating Change, Empowering Women, and Growing a Greener Tomorrow",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>
            <p
              className="detail"
              data-aos="fade-up"
              data-aos-duration="1100"
              data-aos-delay="100"
            >
              Transforming agriculture through organic practices, empowering
              women farmers, and digitizing sustainable farming for a better
              future.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
