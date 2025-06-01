import React from 'react';
import ListItem from './ListItem';
import './ListContainer.css';

const ListContainer = ({ listNumber, items, isSelectable, isChecked, onCheck }) => (
  <div className="list-box">
    <div className='list-header'>
        {isSelectable && (
        <input
            type="checkbox"
            checked={isChecked}
            onChange={onCheck}
            className="list-checkbox"
        />
        )}
        <h3>List {listNumber!==0?listNumber:"Middle"}</h3>
    </div>
    
    {items.map((item,index) => (
      <ListItem key={index} item={item} listNumber={item.list_number} isSelectable={isSelectable} />
    ))}
  </div>
);

export default ListContainer;
