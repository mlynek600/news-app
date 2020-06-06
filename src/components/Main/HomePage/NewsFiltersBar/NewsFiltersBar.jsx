import React from "react";
import CategoryDropdown from "./CategoryDropdown";
import "./NewsFiltersBar.css";

const NewsFiltersBar = props => (
  <div id="NewsFiltersBar">
    <div className="search">
      <label>Search: </label>
      <input
        className="input"
        placeholder="what are you looking for"
        onChange={e => props.onSearchQueryChange(e.target.value)}
      ></input>
    </div>
    <CategoryDropdown
      onCategoryChange={props.onCategoryChange}
      category={props.category}
    />
  </div>
);

export default NewsFiltersBar;
