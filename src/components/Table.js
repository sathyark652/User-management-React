// Table.js
import React, { useState } from 'react';

const Table = ({ users, onEdit, onDelete, onSelect, selectedRows }) => {
  const [editableRowId, setEditableRowId] = useState(null);
  const [editedUserData, setEditedUserData] = useState({}); // State to track edited data

  const handleEditClick = (id) => {
    setEditableRowId(id);
    setEditedUserData({}); // Reset edited data state
    onEdit(id);
  };

  const handleSaveClick = () => {
    // Call onEdit with the edited data
    onEdit(editableRowId, editedUserData);
    setEditableRowId(null);
    setEditedUserData({}); // Reset edited data state
  };

  const handleDeleteClick = (id) => {
    onDelete(id);
  };

  const handleRowSelect = (id) => {
    onSelect(id);
  };

  const handleInputChange = (property, value) => {
    // Update the corresponding state based on the property being edited
    setEditedUserData(prevData => ({ ...prevData, [property]: value }));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Select</th>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id} className={selectedRows.includes(user.id) ? 'selected-row' : ''}>
            <td>
              <input
                type="checkbox"
                onChange={() => handleRowSelect(user.id)}
                checked={selectedRows.includes(user.id)}
              />
            </td>
            <td>{user.id}</td>
            <td>
              {editableRowId === user.id ? (
                <input
                  type="text"
                  value={editedUserData.name || user.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                />
              ) : (
                user.name
              )}
            </td>
            <td>
              {editableRowId === user.id ? (
                <input
                  type="text"
                  value={editedUserData.email || user.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
              ) : (
                user.email
              )}
            </td>
            <td>
              {editableRowId === user.id ? (
                <input
                  type="text"
                  value={editedUserData.role || user.role}
                  onChange={(e) => handleInputChange('role', e.target.value)}
                />
              ) : (
                user.role
              )}
            </td>
            <td>
              {editableRowId === user.id ? (
                <button className="action-button save" onClick={handleSaveClick}>
                  Save
                </button>
              ) : (
                <>
                  <button className="action-button edit" onClick={() => handleEditClick(user.id)}>
                    Edit
                  </button>
                  <button className="action-button delete" onClick={() => handleDeleteClick(user.id)}>
                    Delete
                  </button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
