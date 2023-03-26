import React, { useEffect, useState } from "react";
import "./GallerySection.css";
import MealsItem from "../components/MealsItem";

function GallerySection() {
  const [images, setImages] = useState(null);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert`)
      .then((response) => response.json())
      .then((data) => {
        setImages(data.meals);
      });
  }, []);
  return (
    <div className="gallery__section section">
      <div className="overlay__overlay"></div>
      <div className="padding__global">
        <div className="gallery__content">
          <div className="gallery__col__1">
            <p className="gallery__intro__tag tag">Instagram</p>
            <h2 className="gallery__intro__text title">photo gallery</h2>
            <h4 className="gallery__intro__desc desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.
            </h4>
            <button className="gallery__intro__button btn__primary">View More</button>
          </div>
          <div className="gallery__col__2 gallery__container">
            <div className="gallery__gallery">{images ? <MealsItem meals={images} /> : <p className="gallery__loading">Loading...</p>}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GallerySection;
