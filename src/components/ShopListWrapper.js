import React, { useState } from "react";
import { ShopListForm } from "./ShopListForm";
import { v4 as uuidv4 } from "uuid";
import { ShopList } from "./ShopList";
import { EditShopList } from "./EditShopList";
import { GithubPicker } from "react-color";
uuidv4();

export const ShopListWrapper = () => {
  const [listItems, setListItems] = useState([]);

  const colorListItem = (id, color) => {
    setListItems(
      listItems.map((listItem) =>
        listItem.id === id ? { ...listItem, backgroundColor: color } : listItem
      )
    );
  };

  const addListItem = (listItem) => {
    setListItems([
      ...listItems,
      { id: uuidv4(), item: listItem, completed: false, isEditing: false },
    ]);
    console.log(listItems);
  };

  const toggleStrikeThrough = (id) => {
    setListItems(
      listItems.map((listItem) =>
        listItem.id === id
          ? { ...listItem, inCart: !listItem.inCart }
          : listItem
      )
    );
  };

  const deleteListItem = (id) => {
    setListItems(listItems.filter((listItem) => listItem.id !== id));
  };
  const editListItem = (id) => {
    setListItems(
      listItems.map((listItem) =>
        listItem.id === id
          ? { ...listItem, isEditing: !listItem.isEditing }
          : listItem
      )
    );
  };
  const editItem = (item, id) => {
    setListItems(
      listItems.map((listItem) =>
        listItem.id === id
          ? { ...listItem, item, isEditing: !listItem.isEditing }
          : listItem
      )
    );
  };
  return (
    <div className="ShopListWrapper">
      <h1>My Shopping List</h1>
      <ShopListForm addListItem={addListItem} />
      {listItems.map((listItem, index) =>
        listItem.isEditing ? (
          <EditShopList editListItem={editItem} item={listItem} />
        ) : (
          <ShopList
            item={listItem}
            key={index}
            toggleStrikeThrough={toggleStrikeThrough}
            deleteListItem={deleteListItem}
            editListItem={editListItem}
            colorListItem={colorListItem}
            backgroundColor={listItem.backgroundColor}
          />
        )
      )}
    </div>
  );
};
