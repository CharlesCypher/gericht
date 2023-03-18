import React, { useRef, useState } from "react";
import "./HeroSection.css";
import heroImage from "../src/assets/hero.png";
// import AboutSection from "./AboutSection";

function HeroSection() {
  // const [count, setCount] = useState(0);
  // const handleCount = () => {};
  // const images = [
  //   "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=800",
  //   "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=800",
  //   "https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=800",
  //   "https://images.pexels.com/photos/604969/pexels-photo-604969.jpeg?auto=compress&cs=tinysrgb&w=800",
  // ];

  // const x = useRef(null);
  // const scrollDown = (ref) => {
  //   window.scrollTo({
  //     top: ref.current.offsetTop,
  //     behavior: "smooth",
  //   });
  // };

  return (
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
              <p className="hero__intro__tag">Chase the new flavour</p>
              <h1 className="hero__intro__text">
                The key to
                <br /> Fine dining
              </h1>
              <h4 className="hero__intro__desc">
                Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam. Et, penatibus aliquam amet tellus
              </h4>
              <button className="hero__intro__btn btn__primary">Explore More</button>
            </div>
            <div className="hero__col__3">
              <div className="hero__img__container">
                <img src={heroImage} alt="" className="hero__image" />
              </div>
              <div className="hero__image__pagination">
                <button className="page">01</button>
                <button className="page">02</button>
                <button className="page">03</button>
                <button className="page">04</button>
              </div>
            </div>
            <aside className="hero__col__4">
              <button className="hero__scroll__btn">SCROLL</button>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HeroSection;
