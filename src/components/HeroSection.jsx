import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";
import AboutSection from "./AboutSection";

function HeroSection() {
  const aboutSection = useRef(null);
  const scrollDown = () => {
    window.scrollTo({
      top: aboutSection.current?.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <main>
        <section className="hero__section">
          <div className="padding__global">
            <div className="hero__panel__12__col">
              <aside className="hero__col__1">
                <div className="hero__aside__content">
                  <span className="hero__hashtag">
                    <a href="#">#Bar</a>
                  </span>
                  <span className="hero__hashtag">
                    <a href="#">#Gericht</a>
                  </span>
                </div>
              </aside>
              <div className="hero__col__2">
                <p className="hero__intro__tag tag">Chase the new flavour</p>
                <h1 className="hero__intro__text">
                  The key to
                  <br /> Fine dining
                </h1>
                <h4 className="hero__intro__desc desc">
                  Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam. Et, penatibus aliquam amet tellus
                </h4>
                <Link to={"/pages"}>
                  <button className="hero__intro__btn btn__primary">Explore More</button>
                </Link>
              </div>
              <div className="hero__col__3">
                <div className="hero__img__container hero">
                  <img src="https://res.cloudinary.com/cyher/image/upload/v1679115727/hero_t6hhwc.png" alt="image a food" className="hero__image" />
                </div>
                <div className="hero__image__pagination">
                  <button className="page">01</button>
                  <button className="page">02</button>
                  <button className="page">03</button>
                  <button className="page">04</button>
                </div>
              </div>
              <aside className="hero__col__4">
                <button className="hero__scroll__btn" onClick={scrollDown}>
                  SCROLL
                </button>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <AboutSection aboutSection={aboutSection} />
    </>
  );
}

export default HeroSection;
