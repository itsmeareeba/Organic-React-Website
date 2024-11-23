import React from "react";
import "./ContactSection.css";
import messageIcon from "../../Images/message.svg";
import contactIcon from "../../Images/contact.svg";
import routeIcon from "../../Images/route.svg";

const ContactSection = () => {
  return (
    <>
      <section className="contact-section pb-md-5 pb-0">
        <div className="container">
          <ul className="contact-box">
            <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
              <div className="contact-icon">
                <img className="img-fluid" src={messageIcon} alt="message" />
              </div>
              <h3>Mail us</h3>
              <h4>contact@megabot.com</h4>
              <h4>inquiry@megabot.com</h4>
            </li>
            <li
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="contact-icon">
                <img className="img-fluid" src={contactIcon} alt="contact" />
              </div>
              <h3>Call us.</h3>
              <h4>(406) 555-0120</h4>
              <h4>(684) 555-0102</h4>
            </li>
            <li
              data-aos="fade-up"
              data-aos-duration="1300"
              data-aos-delay="150"
            >
              <div className="contact-icon">
                <img className="img-fluid" src={routeIcon} alt="route" />
              </div>
              <h3>Location</h3>
              <h4>2118 Thornridge Cir.</h4>
              <h4>Syracuse, Connecticut 35624</h4>
            </li>
          </ul>
        </div>
        <div
          className="contact-details-wrapper"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="50"
        >
          <div className="contact-details">
            <div className="row g-lg-5 g-4">
              <div className="col-xl-12">
                <form className="auth-form">
                  <div className="row g-4">
                    <div className="col-sm-6">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                      />
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="phoneNumber" className="form-label">
                        Phone number
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phoneNumber"
                        name="phoneNumber"
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="message" className="form-label">
                        Additional Message
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="3"
                      ></textarea>
                    </div>

                    <div
                      className="hero-action-otr"
                      style={{ justifyContent: "flex-start" }}
                    >
                      <button type="submit" className="hero-action-inr">
                        Send message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
