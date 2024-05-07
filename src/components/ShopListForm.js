import React, { useState } from "react";

export const ShopListForm = ({ addListItem }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addListItem(value);
      setValue("");
    }
  };
  return (
    <form className="ShopListForm" id="shopListForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="shoplist-input"
        value={value}
        placeholder="What do you need?"
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button type="submit" className="shoplist-btn">
        Add Item
      </button>
    </form>
  );
};
