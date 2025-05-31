/* === src/components/ListSelection.js === */
import React, { useState } from 'react';
import ListContainer from './ListContainer';
import './ListSelection.css';

const ListSelection = ({ lists, selectedLists, setSelectedLists, onCreateList }) => {
  const groupedLists = lists.reduce((acc, item) => {
    acc[item.list_number] = acc[item.list_number] || [];
    acc[item.list_number].push(item);
    return acc;
  }, {});

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
        {Object.entries(groupedLists).map(([listNumber, items]) => (
          <ListContainer
            key={listNumber}
            listNumber={parseInt(listNumber)}
            items={items}
            isSelectable
            isChecked={selectedLists.includes(parseInt(listNumber))}
            onCheck={() => handleCheckbox(parseInt(listNumber))}
          />
        ))}
      </div>
    </div>
  );
};

export default ListSelection;
