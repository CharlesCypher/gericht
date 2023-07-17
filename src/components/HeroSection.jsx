import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import AboutSection from "./AboutSection";
import "./HeroSection.css";

function HeroSection() {
  const [currentImg, setCurrentImg] = useState("https://res.cloudinary.com/cyher/image/upload/v1679115727/hero_t6hhwc.png");
  const images = [
    "https://res.cloudinary.com/cyher/image/upload/v1679115727/hero_t6hhwc.png",
    "https://res.cloudinary.com/cyher/image/upload/v1689622673/photo-1506368249639-73a05d6f6488_qggd9v.jpg",
    "https://images.unsplash.com/photo-1551218372-a8789b81b253?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc3RhdXJhbnQlMjBraXRjaGVufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1561954468-039c5f32644d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHJlc3RhdXJhbnQlMjBraXRjaGVufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  ];
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
                <Link to={"/"}>
                  <button className="hero__intro__btn btn__primary">Explore More</button>
                </Link>
              </div>
              <div className="hero__col__3">
                <div className="hero__img__container hero">
                  <img src={currentImg} alt="image a food" className="hero__image" />
                </div>
                <div className="hero__image__pagination">
                  <button
                    className="page"
                    style={images[0] === currentImg ? { color: "#DCCA87" } : { color: "white" }}
                    onClick={() => setCurrentImg(images[0])}
                  >
                    01
                  </button>
                  <button
                    className="page"
                    style={images[1] === currentImg ? { color: "#DCCA87" } : { color: "white" }}
                    onClick={() => setCurrentImg(images[1])}
                  >
                    02
                  </button>
                  <button
                    className="page"
                    style={images[2] === currentImg ? { color: "#DCCA87" } : { color: "white" }}
                    onClick={() => setCurrentImg(images[2])}
                  >
                    03
                  </button>
                  <button
                    className="page"
                    style={images[3] === currentImg ? { color: "#DCCA87" } : { color: "white" }}
                    onClick={() => setCurrentImg(images[3])}
                  >
                    04
                  </button>
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
