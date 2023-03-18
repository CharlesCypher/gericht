import React from "react";
import knife from "../src/assets/knife.png";
import "./AboutSection.css";

function About() {
  return (
    <section className="about__section">
      <div className="overlay__overlay"></div>
      <div className="padding__global">
        <div className="about__content">
          <div className="about__col__1">
            <h2 className="about__about__intro__text title">About Us</h2>
            <h4 className="about__about__intro__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec
              aliquet eu proin mauris et.
            </h4>
            <button className="about__about__intro__btn btn__primary">Know More</button>
          </div>
          <div className="about__col__2">
            <div className="about__img__container">
              <img src={knife} alt="" className="about__knife" />
            </div>
          </div>
          <div className="about__col__3">
            <h2 className="about__history__intro__text title">Our History</h2>
            <h4 className="about__history__intro__desc">
              Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
              odio nec aliquet.
            </h4>
            <button className="about__history__intro__btn btn__primary">Know More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
