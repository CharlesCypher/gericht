import React from "react";
import "./AboutSection.css";

function AboutSection({ aboutSection }) {
  return (
    <section ref={aboutSection} className="about__section section">
      <div className="overlay__overlay"></div>
      <div className="padding__global">
        <div className="about__content">
          <div className="about__col__1">
            <h2 className="about__about__intro__text title">About Us</h2>
            <h4 className="about__about__intro__desc desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec
              aliquet eu proin.
            </h4>
            <button className="about__about__intro__btn btn__primary">Know More</button>
          </div>
          <div className="about__col__2">
            <div className="about__img__container">
              <img src="https://res.cloudinary.com/cyher/image/upload/v1679118664/knife_kj6nuu.png" alt="image of a knife" className="about__knife" />
            </div>
          </div>
          <div className="about__col__3">
            <h2 className="about__history__intro__text title">Our History</h2>
            <h4 className="about__history__intro__desc desc">
              {" "}
              Believe it or not,restaurants did not always exist,it seems chefs and food servics have been around since the beginning of time,but the
              concept of a restaurant where any paying customer could order from a menu did not come into existence untill the 1700s.
            </h4>
            <button className="about__history__intro__btn btn__primary">Know More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
