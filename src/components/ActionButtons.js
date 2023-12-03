// ActionButtons.js
import React from 'react';

const ActionButtons = ({ onDeleteSelected, onSelectAll, selectedRows }) => {
  const handleDeleteSelected = () => {
    onDeleteSelected(selectedRows);
  };

  return (
    <div className="action-buttons">
      <span>{`${selectedRows.length} selected of ${selectedRows.length}`} records</span>
      <button className="action-button delete" onClick={handleDeleteSelected}>
        Delete Selected
      </button>
      <button className="action-button select-all" onClick={onSelectAll}>
        Select All
      </button>
    </div>
  );
};

export default ActionButtons;
