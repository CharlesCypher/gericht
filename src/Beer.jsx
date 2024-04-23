import React from "react";

function Beer({ data }) {
  return data.slice(7, 12).map((item) => {
    return (
      <div key={item.idDrink} className="menu__menu__plan">
        <div className="menu__plans">
          {/* <h4 className="menu__meal__name">{item.strDrink}</h4> */}
          <h4 className="menu__meal__name">Abacha & Kpomo</h4>
          <h4 className="menu__meal__name">Jollof Rice</h4>
          <h4 className="menu__meal__name">Chicken Salad</h4>
          <h4 className="menu__meal__name">Fried Rice</h4>
          <h4 className="menu__meal__name">Chin Chin</h4>
          <div className="menu__line"></div>
          {/* <span className="menu__meal__price">${item.idDrink.slice(0, 3)}</span> */}
          <span className="menu__meal__price">₦3,000</span>
          <span className="menu__meal__price">₦3,500</span>
          <span className="menu__meal__price">₦5,000</span>
          <span className="menu__meal__price">₦3,500</span>
          <span className="menu__meal__price">₦1,000</span>
        </div>
        <h5 className="menu__meal__quantity">AR | Bottle</h5>
      </div>
    );
  });
}

export default Beer;
