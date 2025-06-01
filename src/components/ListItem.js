import React from "react";
import "./ListItem.css";
import { useDispatch } from "react-redux";
import {
  addToMiddleList,
  addToLeftList,
  addToRightList,
  removeFromLeftList,
  removeFromMiddleList,
  removeFromRightList,
} from "../features/list/listSlice";

const ListItem = ({ item, listNumber, isSelectable }) => {
  const dispatch = useDispatch();

  const moveToMiddle = () => {
    if (listNumber === 1) {
      dispatch(removeFromLeftList(item));
    } else if (listNumber === 2) {
      dispatch(removeFromRightList(item));
    }
    dispatch(addToMiddleList(item));
  };

  const moveToLeft = () => {
    dispatch(removeFromMiddleList(item));
    dispatch(addToLeftList(item));
  };

  const moveToRight = () => {
    dispatch(removeFromMiddleList(item));
    dispatch(addToRightList(item));
  };

  return (
    <div className="list-item">
      <div className="list-item-info">
        <div className="list-name">{item.name}</div>
        <div className="list-description">{item.description}</div>
      </div>
      {!isSelectable && (
        <div className="arrows">
          {listNumber !== 0 && (
            <button onClick={moveToMiddle}>
              {listNumber === 1 ? "→" : "←"}
            </button>
          )}
          {listNumber === 0 && (
            <>
              <button onClick={moveToLeft}>←</button>
              <button onClick={moveToRight}>→</button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ListItem;
