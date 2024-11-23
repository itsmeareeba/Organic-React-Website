import React from "react";
import "./About.css";
import featureBg from "../../Images/feature-bg.png";

function About() {
  return (
    <>
      <section className="About-details">
        <div className="container-fluid">
          <div className="row row-custom">
            <div className="bg-effect"></div>
            <div className="col-lg-10 col-blog-detail-otr">
              <div
                className="col-blog-detail-inr"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="50"
              >
                <p className="heading3-head">Our Values</p>
                <ul
                  className=" heading3-ul-about"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="50"
                >
                  <li className="heading3-li-about">
                    <span className="heading3-p-span">Sustainability:</span>
                    <p className="heading3-p ">
                      We believe that farming should be in harmony with nature,
                      which is why we champion regenerative agriculture
                      practices that restore the land while feeding communities.
                    </p>
                  </li>
                  <li className="heading3-li-about">
                    <span className="heading3-p-span">Empowerment: </span>
                    <p className="heading3-p ">
                      Women are the backbone of agriculture, and we’re dedicated
                      to equipping them with the skills, resources, and
                      opportunities they deserve.
                    </p>
                  </li>
                  <li className="heading3-li-about">
                    <span className="heading3-p-span">Innovation: </span>
                    <p className="heading3-p ">
                      From organic farming to digital tools, we embrace
                      technology to improve farming efficiency, enhance
                      agricultural patterns, and create a sustainable future.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
