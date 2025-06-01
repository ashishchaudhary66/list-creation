import React from "react";
import ListContainer from "./ListContainer";
import "./ListCreation.css";
import { useSelector } from "react-redux";

const ListCreation = ({ onCancel }) => {
  const leftList = useSelector((state) => state.list.leftList);
  const rightList = useSelector((state) => state.list.rightList);
  const middleList = useSelector((state) => state.list.middleList);

  return (
    <div className="list-creation-view">
      <div className="list-creation-header">
        <h1 style={{ textAlign: "center" }}>List Creation</h1>
        <div className="actions">
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
      <div className="list-container-wrapper">
        <ListContainer items={leftList} listNumber={1} />
        <ListContainer items={middleList} listNumber={0} />
        <ListContainer items={rightList} listNumber={2} />
      </div>
    </div>
  );
};

export default ListCreation;
