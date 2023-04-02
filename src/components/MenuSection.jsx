import React, { useState, useEffect } from "react";
import axios from "axios";
import Beer from "../Beer";
// import waveLine from "../assets/curve_line.svg";
import Cocktail from "../Cocktail";
import "./MenuSection.css";

function MenuSection() {
  const [beer, setBeer] = useState(null);
  const [cocktail, setCocktail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = () => {
    const beerAPI = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=beer";
    const cocktailAPI = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=cocktail";
    const getBeer = axios.get(beerAPI);
    const getCocktail = axios.get(cocktailAPI);
    axios
      .all([getBeer, getCocktail])
      .then(
        axios.spread((...allData) => {
          const allBeer = allData[0].data.drinks;
          const allCocktail = allData[1].data.drinks;
          setBeer(allBeer);
          setCocktail(allCocktail);
          setError(null);
        })
      )
      .catch((error) => {
        setError(error.message);
        setBeer(null);
        setCocktail(null);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="menu__section">
      <div className="padding__global">
        <div className="menu__into__container">
          <p className="menu__intro__tag tag">Menu that fits your palatte</p>
          <h2 className="menu__intro__text title">Today's special</h2>
        </div>
        <div className="menu__content">
          <div className="menu__col__1">
            <h3 className="menu__menu__title">wine & beer</h3>
            {loading && (
              <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            )}
            {error && <div className="menu__error">{`There is a problem fetching the menu - ${error}`}</div>}
            {beer && <Beer data={beer} />}
          </div>
          <div className="menu__col__2">
            <div className="menu__img__container">
              <img src="https://res.cloudinary.com/cyher/image/upload/v1679118463/shaker_k8wzek.png" alt="shaker" className="menu__img" />
            </div>
          </div>
          <div className="menu__col__3">
            <h3 className="menu__menu__title">cocktails</h3>
            {loading && (
              <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            )}
            {error && <div>{`There is a problem fetching the menu - ${error}`}</div>}
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
