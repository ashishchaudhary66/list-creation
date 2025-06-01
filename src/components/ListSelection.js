/* === src/components/ListSelection.js === */
import React, { useState } from 'react';
import ListContainer from './ListContainer';
import './ListSelection.css';
import { useSelector } from 'react-redux';

const ListSelection = ({ lists, selectedLists, setSelectedLists, onCreateList }) => {
  const leftList = useSelector(state => state.list.leftList);
  const rightList = useSelector(state => state.list.rightList);

  const [error, setError] = useState('');

  const handleCheckbox = (listNumber) => {
    let newSelection = selectedLists.includes(listNumber)
      ? selectedLists.filter(n => n !== listNumber)
      : [...selectedLists, listNumber];
    setSelectedLists(newSelection);
  };

  const handleCreate = () => {
    if (selectedLists.length !== 2) {
      setError('You should select exactly 2 lists to create a new list');
    } else {
      setError('');
      onCreateList();
    }
  };

  return (
    <div>
      <div className="list-selection">
        <h1>List Creation</h1>
        <button onClick={handleCreate}>Create a new list</button>
        {error && <p className="error-msg">{error}</p>}
      </div>
      <div className="list-container-wrapper">
        <ListContainer
            listNumber={1}
            items={leftList}
            isSelectable
            isChecked={selectedLists.includes(1)}
            onCheck={() => handleCheckbox(1)}
          />
          <ListContainer
            listNumber={2}
            items={rightList}
            isSelectable
            isChecked={selectedLists.includes(2)}
            onCheck={() => handleCheckbox(2)}
          />
      </div>
    </div>
  );
};

export default ListSelection;
