import React from "react";

function Beer({ data }) {
  return data.slice(0, 5).map((item) => {
    return (
      <div key={item.idDrink} className="menu__menu__plan">
        <div className="menu__plans">
          <h4 className="menu__meal__name">{item.strDrink}</h4>
          <div className="menu__line"></div>
          <span className="menu__meal__price">${item.idDrink.slice(0, 3)}</span>
        </div>
        <h5 className="menu__meal__quantity">AR | Bottle</h5>
      </div>
    );
  });
}

export default Beer;
