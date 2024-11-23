// import React, { useState, useEffect } from "react";
import "./FeatureSection.css";
// import smsIcon from "../../Images/svg/feature/message.svg";
// import smsBoldIcon from "../../Images/svg/feature/message-bold.svg";
// import arrowRight from "../../Images/svg/feature/arrow-right-line (3).svg";
import policy from "../../Images/p.svg";
import policyBold from "../../Images/policy-bold.svg";
import support from "../../Images/support.svg";
import supportbold from "../../Images/support-bold.svg";
import assistance from "../../Images/assistance.svg";
import assistancebold from "../../Images/assistance-bold.svg";
import train from "../../Images/train.svg";
import trainbold from "../../Images/trainBold.svg";
import featureBg from "../../Images/feature-bg.png";
const FeatureSection = (() => {

  return (
    <>
      <section
        className="feature-section section-b-space"
        id="#featureSection"
        // ref={ref}
      >
        <div className="bg-effect">
          <img src={featureBg} className="img-fluid feature-bg" alt="" />
        </div>

        <div className="container"data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
          <div className="title-basic">
            <p className="features-heading">
              Unleash limitless potential & versatile features &amp; for every need
            </p>
          </div>

          <div className="container-fluid">
            <div className="row g-4 justify-content-center">
              {/* {features.map((item, i) => (
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={i}>
                  <div className="feature-box">
                    <div className="feature-top">
                      <div className="feature-icon">
                        <img
                          style={{ width: "35px", height: "35px" }}
                          src={`https://goatbolbstorage.blob.core.windows.net/chatbot/${item.nonHoverIcon}`}
                          className="outline-icon"
                          alt="NONHover Image"
                        />
                        <img
                          style={{ width: "35px", height: "35px" }}
                          src={`https://goatbolbstorage.blob.core.windows.net/chatbot/${item.hoverIcon}`}
                          className="bold-icon"
                          alt="Hover Image"
                        />
                      </div>
                      
                      <p className="features-title">{item?.title}</p>
                    </div>
                    <h4>{item?.description}</h4>
                  </div>
                </div>
              ))} */}
              
                <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
                  <div className="feature-box">
                    <div className="feature-top">
                      <div className="feature-icon">
                        <img src={policy} className="outline-icon" alt="" />
                        <img src={policyBold} className="bold-icon" alt="" />
                      </div>
                      <p className="features-title">Organic Products</p>
                    </div>
                    <ul className="ul-h4">
                    <li className="h4">Selling pesticide-free, organically grown crops.</li>
                    <li className="h4">Promoting healthy, chemical-free food for consumers.</li>
                    <li className="h4">Supporting sustainable and eco-conscious farming practices.</li>
                    </ul>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 mb-4" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
                  <div className="feature-box">
                    <div className="feature-top">
                      <div className="feature-icon">
                        <img src={support} className="outline-icon" alt="" />
                        <img src={supportbold} className="bold-icon" alt="" />
                      </div>
                      <p className="features-title">Digitalizing Green Farming</p>
                    </div>
                    <ul className="ul-h4">
                    <li className="h4">Introducing digital tools for smarter, more efficient farming.</li>
                    <li className="h4">Analyzing agricultural data to enhance crop yields.</li>
                    <li className="h4">Helping farmers adopt tech solutions for greener agriculture.</li>
                    </ul>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="150">
                  <div className="feature-box">
                    <div className="feature-top">
                      <div className="feature-icon">
                        <img src={assistance} className="outline-icon" alt="" />
                        <img src={assistancebold} className="bold-icon" alt="" />
                      </div>
                      <p className="features-title">Empowering Women Farmers</p>
                    </div>
                    <ul className="ul-h4">
                    <li className="h4">Offering specialized training programs on regenerative agriculture.</li>
                    <li className="h4">Providing tools and resources to boost productivity and sustainability.</li>
                    <li className="h4">Supporting women to become leaders in eco-friendly farming.</li>
                    </ul>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 mb-4" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                  <div className="feature-box">
                    <div className="feature-top">
                      <div className="feature-icon">
                        <img src={train} className="outline-icon" alt="" />
                        <img src={trainbold} className="bold-icon" alt="" />
                      </div>
                      <p className="features-title">Training & Workshops</p>
                    </div>
                    <ul className="ul-h4">
                    <li className="h4">Conducting hands-on workshops focused on regenerative agriculture.</li>
                    <li className="h4">Teaching eco-friendly techniques such as soil health management and organic pest control.</li>
                    <li className="h4">Providing tailored programs to equip farmers with practical skills</li>
                    </ul>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default FeatureSection;
