import React, { useState } from "react";
import css from "./SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={css["search-box"]}>
      <h2 className={css.title}>Find contacts by name</h2>
      <input
        className={css["search-input"]}
        type="text"
        value={value}
        onChange={onFilter}
        placeholder="Enter profile name"
      ></input>
    </div>
  );
};

export default SearchBox;
