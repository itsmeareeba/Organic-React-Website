import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import "./PopupModal.css";
import { Link } from "react-router-dom";
function PopupModal() {
  const [show, setShow] = useState(false);

  // Show the modal when the page loads
  useEffect(() => {
    setShow(true); // Set to true when the page loads
  }, []);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="modal-body">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="modal-icon"
          >
            <path d="M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20ZM19 19V9.97815L12 4.53371L5 9.97815V19H19Z"></path>
          </svg>
          <p className="News-detail modal-text">
            The Farm Carbon Toolkit’s Carbon Calculator is a powerful tool
            designed to help farmers and agricultural businesses assess and
            reduce their carbon footprint. This user-friendly calculator enables
            users to measure the greenhouse gas emissions associated with their
            farming practices, including crop production, livestock management,
            and energy use. By providing a clear and comprehensive overview of
            their carbon impact, the tool empowers farmers to identify areas for
            improvement, implement more sustainable practices, and track
            progress over time. Access the Farm Carbon Toolkit’s Carbon
            Calculator to start your journey toward a more sustainable future.
          </p>
          <Link
            className="header-actions1-inr forOffcanvas"
            to="/contact"
            onClick={handleClose}
          >
            <span>Contact Us</span>
          </Link>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PopupModal;
