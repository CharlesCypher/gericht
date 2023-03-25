import React from "react";
import "./ContactSection.css";

function ContactSection() {
  return (
    <div className="contact__section section">
      <div className="overlay__overlay"></div>
      <div className="padding__global">
        <div className="contact__content">
          <div className="contact__col__1">
            <p className="contact__intro__tag tag">Contact</p>
            <h2 className="contact__intro__text title">Find Us</h2>
            <h5 className="contact__intro-desc desc">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</h5>
          </div>
          <div className="contact__col__2">
            <div className="contact__img__container hero">
              <img
                src="https://res.cloudinary.com/cyher/image/upload/v1679494449/icejar_z1ef8w.png"
                alt="Glass with ice and lemons"
                className="contact__img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
