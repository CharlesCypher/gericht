import React from "react";
import logo from "../src/assets/awards_logo.png";
import award002 from "../src/assets/award_002.png";
import award001 from "../src/assets/award_001.png";
import award003 from "../src/assets/award_003.png";
import award005 from "../src/assets/award_005.png";
import "./AwardSection.css";

function AwardSection() {
  return (
    <section className="award__section section">
      <div className="overlay__overlay"></div>
      <div className="padding__global">
        <img className="brand__logo" src={logo} alt="brand__logo" />
        <div className="award__content">
          <div className="award__col__2">
            <p className="award__intro__tag tag">Awards & Recognition</p>
            <h2 className="award__intro__text title">our laurels</h2>
            <div className="award__trophy__container">
              <div className="award__trophy">
                <div className="trophy__img__container">
                  <img src={award002} alt="award001" className="trophy__img" />
                </div>
                <div className="award__details">
                  <h3 className="trophy__title">Bib Gourmond</h3>
                  <h5 className="trophy__desc">
                    Lorem ipsum dolor sit <br />
                    amet, consectetur.
                  </h5>
                </div>
              </div>
              <div className="award__trophy">
                <div className="trophy__img__container">
                  <img src={award001} alt="award002" className="trophy__img" />
                </div>
                <div className="award__details">
                  <h3 className="trophy__title">Rising Star</h3>
                  <h5 className="trophy__desc">
                    Lorem ipsum dolor sit <br />
                    amet, consectetur.
                  </h5>
                </div>
              </div>
              <div className="award__trophy">
                <div className="trophy__img__container">
                  <img src={award005} alt="award003" className="trophy__img" />
                </div>
                <div className="award__details">
                  <h3 className="trophy__title">AA Hospitality </h3>
                  <h5 className="trophy__desc">
                    Lorem ipsum dolor sit <br />
                    amet, consectetur.
                  </h5>
                </div>
              </div>
              <div className="award__trophy">
                <div className="trophy__img__container">
                  <img src={award003} alt="award004" className="trophy__img" />
                </div>
                <div className="award__details">
                  <h3 className="trophy__title">Outstanding Chef</h3>
                  <h5 className="trophy__desc">
                    Lorem ipsum dolor sit <br />
                    amet, consectetur.
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="award__col__3">
            <div className="award__img__container">
              <img src="https://res.cloudinary.com/cyher/image/upload/v1679118448/award_hero_i2bc4n.png" alt="food image of meat and peas" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AwardSection;
