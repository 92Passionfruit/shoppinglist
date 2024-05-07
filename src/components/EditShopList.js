import React, { useState } from "react";

export const EditShopList = ({ editListItem, item }) => {
  const [value, setValue] = useState(item.item);

  const handleSubmit = (e) => {
    e.preventDefault();
    editListItem(value, item.id);
  };
  return (
    <form className="ShopListForm" id="shopListForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="shoplist-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button type="submit" className="shoplist-btn">
        Update Item
      </button>
    </form>
  );
};
