import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <div>
      <div className="otr-header">
        <div className="">
          <div
            className="inner-header"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="50"
          >
            <div className="wrapper3">
              <h2 className="heading-H21">{props.headname}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
