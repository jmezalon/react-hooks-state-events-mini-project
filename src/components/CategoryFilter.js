import React from "react";

function CategoryFilter({ categories, onHandleClick, categorySelection }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => <button className={categorySelection === category ? "selected" : ""} onClick={onHandleClick} key={category}>{category}</button>)}
    </div>
  );
}

export default CategoryFilter;
