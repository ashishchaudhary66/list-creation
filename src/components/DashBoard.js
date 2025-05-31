import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import FailureView from './FailureView';
import ListSelection from './ListSelection';
import ListCreation from './ListCreation';
import './DashBoard.css';
import { fetchLists } from '../utils/api';

const DashBoard = () => {
  const [lists, setLists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [viewMode, setViewMode] = useState('selection');
  const [selectedLists, setSelectedLists] = useState([]);

  const getLists = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await fetchLists();
      setLists(response.lists);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getLists();
  }, []);

  const updateLists = (updatedLists) => {
    setLists(updatedLists);
    setSelectedLists([]);
    setViewMode('selection');
  };

  if (isLoading) return <Loader />;
  if (isError) return <FailureView onRetry={getLists} />;

  return (
    <div className="dashboard-container">
      {viewMode === 'selection' ? (
        <ListSelection
          lists={lists}
          selectedLists={selectedLists}
          setSelectedLists={setSelectedLists}
          onCreateList={() => setViewMode('creation')}
        />
      ) : (
        <ListCreation
          lists={lists}
          selectedLists={selectedLists}
          onCancel={() => setViewMode('selection')}
          onUpdate={updateLists}
        />
      )}
    </div>
  );
};

export default DashBoard;