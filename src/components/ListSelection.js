import React, { useState } from 'react';
import ListContainer from './ListContainer';
import './ListSelection.css';
import { useSelector } from 'react-redux';
import { useSavePrevListData } from '../utils/customHooks';

const ListSelection = ({ selectedLists, setSelectedLists, onCreateList }) => {
  const leftList = useSelector(state => state.list.leftList);
  const rightList = useSelector(state => state.list.rightList);
  const saveToCurrData = useSavePrevListData();
  
  const [error, setError] = useState('');

  const handleCheckbox = (listNumber) => {
    let newSelection = selectedLists.includes(listNumber)
      ? selectedLists.filter(n => n !== listNumber)
      : [...selectedLists, listNumber];
    setSelectedLists(newSelection);
  };

  const handleCreate = () => {
    saveToCurrData();
    if (selectedLists.length !== 2) {
      setError('You should select exactly 2 lists to create a new list');
    } else {
      setError('');
      onCreateList();
    }
  };

  return (
    <div className='list-selection-view'>
      <div className="list-selection">
        <h1>List Selection</h1>
        <div className="actions">
          <button onClick={handleCreate}>Create a new list</button>
        </div>
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
