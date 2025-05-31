/* === src/components/ListCreation.js === */
import React, { useState } from 'react';
import ListContainer from './ListContainer';
import './ListCreation.css';

const ListCreation = ({ lists, selectedLists, onCancel, onUpdate }) => {
  const [leftList, setLeftList] = useState(
    lists.filter(item => item.list_number === selectedLists[0])
  );
  const [rightList, setRightList] = useState(
    lists.filter(item => item.list_number === selectedLists[1])
  );
  const [middleList, setMiddleList] = useState([]);

  const handleMove = (item, from, action) => {
    if (from === 'middle') {
      setMiddleList(prev => prev.filter(i => i.id !== item.id));
      if (action === 'toLeft') setLeftList(prev => [...prev, item]);
      if (action === 'toRight') setRightList(prev => [...prev, item]);
    } else {
      if (action === 'toMiddle') {
        if (from === selectedLists[0]) setLeftList(prev => prev.filter(i => i.id !== item.id));
        if (from === selectedLists[1]) setRightList(prev => prev.filter(i => i.id !== item.id));
        setMiddleList(prev => [...prev, item]);
      }
    }
  };

  const handleUpdate = () => {
    const updated = [
      ...leftList.map(i => ({ ...i, list_number: selectedLists[0] })),
      ...middleList.map(i => ({ ...i, list_number: 3 })),
      ...rightList.map(i => ({ ...i, list_number: selectedLists[1] }))
    ];
    const others = lists.filter(
      i => ![...leftList, ...rightList, ...middleList].some(x => x.id === i.id)
    );
    onUpdate([...others, ...updated]);
  };

  return (
    <div className="list-creation-view">
      <h1 style={{textAlign: 'center'}}>List Creation</h1>
      <div className="actions">
        <button onClick={onCancel}>Cancel</button>
        <button onClick={handleUpdate}>Update</button>
      </div>
      <div className="list-container-wrapper">
        <ListContainer listNumber={selectedLists[0]} items={leftList} onItemAction={handleMove} />
        <ListContainer listNumber="middle" items={middleList} onItemAction={handleMove} />
        <ListContainer listNumber={selectedLists[1]} items={rightList} onItemAction={handleMove} />
      </div>
    </div>
  );
};

export default ListCreation;
