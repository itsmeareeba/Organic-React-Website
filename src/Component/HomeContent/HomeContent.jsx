import React from "react";
import "./HomeContent.css";
function City(props) {
  return (
    <div>
      <section className="our-involvment " id="">
        <div className="container-fluid">
          <div className={props.class}>
            <div className="col-xxl-6 col-lg-12 col-md-12 col-sm-12 col-content-otr">
              <div
                className="col-content-inr"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="150"
              >
                <h2 className="heading-H2">{props.heading}</h2>
                <p className="heading-M">{props.detail}</p>
              </div>
            </div>
            <div className=" col-xxl-6 col-lg-12 col-md-12 col-sm-12  col-img-otr">
              <div className="col-img-inr">
                <img
                  src={props.image}
                  className="img-sec1"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="50"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default City;
