import { useEffect, useState, React } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Navbar.css";
import closeIcon from "../../Images/close-line.svg";
import { Link } from "react-router-dom";
import logo from "../../Images/footer.png";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClick = () => {
    window?.scrollTo(0, 0);
    handleClose();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window?.scrollY > 95) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className={`header-otr ${scrolled ? "scrolled" : ""}`}>
        <div className="header-container">
          <div className="header-inr">
            <div className="menu-logo">
              <div className="menu-header" onClick={handleShow}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 4.5H21"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M3 9.5H21"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M3 14.5H21"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M3 19.5H21"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <Link to={"/"} className="header-logo">
                <img className="again-nav-logo" src={logo} alt={"Logo"} />
              </Link>
            </div>
            <ul className="header-ul ">
              <li className="header-li">
                <Link className="header-a" to="/" onClick={handleClick}>
                  Home
                </Link>
              </li>
              <li className="header-li">
                <Link className="header-a" to="/About" onClick={handleClick}>
                  About us
                </Link>
              </li>
              <li className="header-li">
                <Link
                  className="header-a"
                  to="/ServiceView"
                  onClick={handleClick}
                >
                  Services
                </Link>
              </li>
              {/* <li className="header-li">
              <Link className="header-a" to="/Faq" onClick={handleClick}>
                FAQ's
              </Link>
            </li> */}
              <li className="header-li">
                <Link
                  className="header-a"
                  to="/Initiatives"
                  onClick={handleClick}
                >
                  initiative
                </Link>
              </li>
              <li className="header-li">
                <Link className="header-a" to="/Blog" onClick={handleClick}>
                  Blogs
                </Link>
              </li>
              <li className="header-li">
                <Link className="header-a" to="/News" onClick={handleClick}>
                  News
                </Link>
              </li>
            </ul>
            <div className="flex gap-3 ">
              <div className="header-actions">
                <div className="header-actions1-otr cursor-pointer">
                  <Link to="/contact" className="header-actions1-inrr extra">
                    <span>Contact Us</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Offcanvas show={show} onHide={handleClose} className="offcanvas-main ">
        <Offcanvas.Body className="offcanvas-body-main">
          <div className="offcanvas-header">
            <p className="offcanvas-heading"></p>
            <img
              className="closeIcon"
              src={closeIcon}
              alt="Close"
              onClick={handleClose}
            />
          </div>
          <div className="offcanvas-body">
            <ul className="offcanvas-ul">
              <li className="header-li">
                <Link className="header-a" to="/" onClick={handleClick}>
                  Home
                </Link>
              </li>
              <li className="header-li">
                <Link className="header-a" to="/About" onClick={handleClick}>
                  About us
                </Link>
              </li>
              <li className="header-li">
                <Link
                  className="header-a"
                  to="/ServiceView"
                  onClick={handleClick}
                >
                  Services
                </Link>
              </li>
              {/* <li className="header-li">
                <Link className="header-a" to="/Faq" onClick={handleClick}>
                  FAQ's
                </Link>
              </li> */}
              <li className="header-li">
                <Link
                  className="header-a"
                  to="/Initiatives"
                  onClick={handleClick}
                >
                  initiative
                </Link>
              </li>
              <li className="header-li">
                <Link className="header-a" to="/Blog" onClick={handleClick}>
                  Blogs
                </Link>
              </li>
              <li className="header-li">
                <Link className="header-a" to="/News" onClick={handleClick}>
                  News
                </Link>
              </li>
            </ul>
            <div className="header-actions1-otr btn-ofc">
              <Link className="header-actions1-inr forOffcanvas" to="/contact">
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavBar;
