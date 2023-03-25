import React, { useState, useEffect } from "react";
import Beer from "./Beer";
// import waveLine from "../assets/curve_line.svg";
import Cocktail from "./Cocktail";
import "./MenuSection.css";

function MenuSection() {
  const [beer, setBeer] = useState(null);
  const [loadingBeer, setLoadingBeer] = useState(true);
  const [errorBeer, setErrorBeer] = useState(null);
  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=beer`)
      .then((response) => response.json())
      .then((actualData) => {
        setBeer(actualData.drinks);
        setErrorBeer(null);
      })
      .catch((err) => {
        setErrorBeer(err.message);
        setBeer(null);
      })
      .finally(() => {
        setLoadingBeer(false);
      });
  }, []);

  const [cocktail, setCocktail] = useState(null);
  const [loadingCocktail, setLoadingCocktail] = useState(true);
  const [errorCocktail, setErrorCocktail] = useState(null);
  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=cocktail`)
      .then((response) => response.json())
      .then((actualData) => {
        setCocktail(actualData.drinks);
        setErrorCocktail(null);
      })
      .catch((err) => {
        setErrorCocktail(err.message);
        setCocktail(null);
      })
      .finally(() => {
        setLoadingCocktail(false);
      });
  }, []);

  return (
    <section className="menu__section section">
      <div className="padding__global">
        <div className="menu__into__container">
          <p className="menu__intro__tag tag">Menu that fits your palatte</p>
          <h2 className="menu__intro__text title">Today's special</h2>
        </div>
        <div className="menu__content">
          <div className="menu__col__1">
            <h3 className="menu__menu__title">wine & beer</h3>
            {loadingBeer && <div className="menu__loading">A moment please...</div>}
            {errorBeer && <div className="menu__error">{`There is a problem fetching the menu - ${error}`}</div>}
            {beer && <Beer data={beer} />}
          </div>
          <div className="menu__col__2">
            <div className="menu__img__container">
              <img src="https://res.cloudinary.com/cyher/image/upload/v1679118463/shaker_k8wzek.png" alt="shaker" className="menu__img" />
            </div>
          </div>
          <div className="menu__col__3">
            <h3 className="menu__menu__title">cocktails</h3>
            {loadingCocktail && <div>A moment please...</div>}
            {errorCocktail && <div>{`There is a problem fetching the menu - ${error}`}</div>}
            {cocktail && <Cocktail data={cocktail} />}
          </div>
        </div>
        <div className="menu__intro__btn__container">
          <button className="menu__intro__btn btn__primary">View More</button>
        </div>
      </div>
    </section>
  );
}

export default MenuSection;
