import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import FailureView from './FailureView';
import ListSelection from './ListSelection';
import ListCreation from './ListCreation';
import './DashBoard.css';
import { fetchLists } from '../utils/api';
import { useDispatch } from 'react-redux';
import { addToLeftList, addToRightList, resetLists } from '../features/list/listSlice';

const DashBoard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [viewMode, setViewMode] = useState('selection');
  const [selectedLists, setSelectedLists] = useState([]);
  const dispatch = useDispatch();
  
  const getLists = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      dispatch(resetLists());
      const response = await fetchLists();
      const data = response.lists;
      data.forEach(element => {
        if(element.list_number===1){
          dispatch(addToLeftList(element));
        }
        else if(element.list_number===2){
          dispatch(addToRightList(element));
        }
      });
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getLists();
  }, []);

  if (isLoading) return <Loader />;
  if (isError) return <FailureView onRetry={getLists} />;

  return (
    <div className="dashboard-container">
      {viewMode === 'selection' ? (
        <ListSelection
          selectedLists={selectedLists}
          setSelectedLists={setSelectedLists}
          onCreateList={() => setViewMode('creation')}
        />
      ) : (
        <ListCreation
          onCancel={() => setViewMode('selection')}
        />
      )}
    </div>
  );
};

export default DashBoard;