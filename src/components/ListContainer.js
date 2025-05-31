/* === src/components/ListContainer.js === */
import React from 'react';
import ListItem from './ListItem';
import './ListContainer.css';

const ListContainer = ({ listNumber, items, isSelectable, isChecked, onCheck, onItemAction }) => (
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
        <h3>List {listNumber}</h3>
    </div>
    
    {items.map(item => (
      <ListItem key={item.id} item={item} onItemAction={onItemAction} listNumber={listNumber} />
    ))}
  </div>
);

export default ListContainer;
