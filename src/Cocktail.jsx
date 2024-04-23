import React from "react";

function Cocktail({ data }) {
  // return data.slice(7, 12).map((item) => {
  return (
    <>
      {/* <div key={item.idDrink} className="menu__menu__plan"> */}
      <div className="menu__menu__plan">
        <div className="menu__plans">
          {/* <h4 className="menu__meal__name">{item.strDrink}</h4> */}
          <h4 className="menu__meal__name">Parfait</h4>

          <div className="menu__line"></div>
          {/* <span className="menu__meal__price">${item.idDrink.slice(0, 3)}</span> */}
          <span className="menu__meal__price">₦2,000</span>
        </div>
        <h5 className="menu__meal__quantity">AR | Bottle</h5>
      </div>
      <div className="menu__menu__plan">
        <div className="menu__plans">
          {/* <h4 className="menu__meal__name">{item.strDrink}</h4> */}
          <h4 className="menu__meal__name">Ice Cream</h4>
          <div className="menu__line"></div>
          {/* <span className="menu__meal__price">${item.idDrink.slice(0, 3)}</span> */}
          <span className="menu__meal__price">₦3,500</span>
        </div>
        <h5 className="menu__meal__quantity">AR | Bottle</h5>
      </div>

      <div className="menu__menu__plan">
        <div className="menu__plans">
          {/* <h4 className="menu__meal__name">{item.strDrink}</h4> */}
          <h4 className="menu__meal__name">Sharwama</h4>
          <div className="menu__line"></div>
          {/* <span className="menu__meal__price">${item.idDrink.slice(0, 3)}</span> */}
          <span className="menu__meal__price">₦3,000</span>
        </div>
        <h5 className="menu__meal__quantity">AR | Bottle</h5>
      </div>
      <div className="menu__menu__plan">
        <div className="menu__plans">
          {/* <h4 className="menu__meal__name">{item.strDrink}</h4> */}
          <h4 className="menu__meal__name">Barbecue</h4>
          <div className="menu__line"></div>
          {/* <span className="menu__meal__price">${item.idDrink.slice(0, 3)}</span> */}
          <span className="menu__meal__price">₦7,500</span>
        </div>
        <h5 className="menu__meal__quantity">AR | Bottle</h5>
      </div>
      <div className="menu__menu__plan">
        <div className="menu__plans">
          {/* <h4 className="menu__meal__name">{item.strDrink}</h4> */}
          <h4 className="menu__meal__name">Burger</h4>
          <div className="menu__line"></div>
          {/* <span className="menu__meal__price">${item.idDrink.slice(0, 3)}</span> */}

          <span className="menu__meal__price">₦2,000</span>
        </div>
        <h5 className="menu__meal__quantity">AR | Bottle</h5>
      </div>
    </>
  );
}

export default Cocktail;
