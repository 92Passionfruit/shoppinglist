import React, { useState } from "react";
import { GithubPicker } from "react-color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faPenToSquare,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";

export const ShopList = ({
  item,
  toggleStrikeThrough,
  deleteListItem,
  editListItem,
  colorListItem,
  backgroundColor,
}) => {
  const [showColorPicker, setShowColorPicker] = useState(false);

  const colors = [
    "#ff7373",
    "#ffa500",
    "#ffd700",
    "#bada55",
    "#66cdaa",
    "#92A8D1",
  ];

  const handleColorChange = (color) => {
    colorListItem(item.id, color.hex);
    setShowColorPicker(false);
  };

  return (
    <div className="Shoplist" style={{ backgroundColor: backgroundColor }}>
      <p
        onClick={() => toggleStrikeThrough(item.id)}
        className={`${item.inCart ? "inCart" : "notInCart"}`}
      >
        {item.item}
      </p>
      <div>
        <FontAwesomeIcon
          icon={faPalette}
          className="color-icon"
          onClick={() => setShowColorPicker(!showColorPicker)}
        />

        {showColorPicker && (
          <div
          //   style={{ position: "absolute", top: "0", left: "0" }}
          >
            <GithubPicker
              colors={colors}
              color={backgroundColor}
              onChange={handleColorChange}
              width="87px"
            />
          </div>
        )}

        <FontAwesomeIcon
          icon={faPenToSquare}
          className="edit-icon"
          onClick={() => editListItem(item.id)}
        />
        <FontAwesomeIcon
          icon={faTrashAlt}
          className="delete-icon"
          onClick={() => deleteListItem(item.id)}
        />
      </div>
    </div>
  );
};
