import React from 'react';
import './ListItem.css';

const ListItem = ({ item, onItemAction, listNumber }) => (
  <div className="list-item">
    <div className='list-item-info'>
      <div className='list-name'>{item.name}</div>
      <div className='list-description'>{item.description}</div>
    </div>
    {onItemAction && (
      <div className="arrows">
        {listNumber !== 'middle' && (
          <button onClick={() => onItemAction(item, listNumber, 'toMiddle')}>
            {
              listNumber===1?"→":"←"
            }
          </button>
        )}
        {listNumber === 'middle' && (
          <>
            <button onClick={() => onItemAction(item, 'middle', 'toLeft')}>←</button>
            <button onClick={() => onItemAction(item, 'middle', 'toRight')}>→</button>
          </>
        )}
      </div>
    )}
  </div>
);

export default ListItem;
