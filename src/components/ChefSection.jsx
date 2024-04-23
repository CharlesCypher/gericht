import React from "react";
import quote from "../assets/quote.svg";
import "./ChefSection.css";

function ChefSection() {
  return (
    <section className="chef__section section">
      <div className="overlay__overlay"></div>
      <div className="padding__global">
        <div className="chef__content">
          <div className="chef__col__1">
            <div className="chef__img__container hero">
              <img src="../assets/tandy.JPG" alt="chef" loading="lazy" className="chef__img" />
            </div>
          </div>
          <div className="chef__col__2">
            <div className="col__2__content">
              <p className="chef__intro__tag tag">Chef's Word</p>
              <h2 className="chef__intro__text title">what we believe in</h2>
              <p className="chef__intro__desc desc">
                <span>
                  <img src={quote} alt="quotation mark" className="quote" />
                </span>
                if you want to become a great chef, you have to work with great chefs. and that's exactly what i did.
              </p>
              <h4 className="chef__intro__author">Tandy Dee</h4>
              <h6 className="chef__intro__rank">Chef & Founder</h6>
              <h3 className="chef__intro__signature">Tandy</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChefSection;
