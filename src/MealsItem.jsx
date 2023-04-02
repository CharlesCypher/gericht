import React from "react";

function MealsItem({ meals }) {
  return meals.slice(7, 15).map((meal) => {
    return (
      <a href="https://instagram.com/corizon001?igshid=ZDdkNTZiNTM=" key={meal.idMeal} className="gallery__img__container">
        <i className="fa-brands fa-instagram"></i>
        <img src={meal.strMealThumb} alt={meal.strMeal} />
      </a>
    );
  });
}

export default MealsItem;
