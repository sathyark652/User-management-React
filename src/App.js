// App.js
import React, { useState, useEffect } from 'react';
import Table from './components/Table';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';
import ActionButtons from './components/ActionButtons';
import Dashboard from './Dashboard';

const App = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchProperty, setSearchProperty] = useState('name');
  const [selectedRows, setSelectedRows] = useState([]);
  const [editedCount, setEditedCount] = useState(0); // Track edited count
  const [deletedCount, setDeletedCount] = useState(0);

  // Edited data state
  const [editedUserData, setEditedUserData] = useState({});

  useEffect(() => {
    // Fetch data from the API
    fetch('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  const itemsPerPage = 10;

  const filteredUsers = users.filter(user =>
    Object.values(user).some(value => value.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentUsers = filteredUsers.slice(start, end);

  const handleSearch = (term, property) => {
    setSearchTerm(term);
    setSearchProperty(property);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleEdit = (id, updatedUserData) => {
    // Find the index of the user with the given id
    const userIndex = users.findIndex(user => user.id === id);

    // Create a new array with the updated user data
    const updatedUsers = [...users];
    updatedUsers[userIndex] = { ...updatedUsers[userIndex], ...updatedUserData };

    // Update the state with the new array of users
    setUsers(updatedUsers);

    // Log a message or perform other actions as needed
    console.log(`User with ID ${id} updated:`, updatedUserData);

    // Reset edited data state
    setEditedUserData({});
    setEditedCount(prevCount => prevCount + 1);
  };

  const handleDelete = (id) => {
    // Implement delete logic if needed
    console.log(`Deleting user with ID: ${id}`);
    // You can remove the user from the state or mark it as deleted
    setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
    setDeletedCount(prevCount => prevCount + 1);
  };

  const handleDeleteSelected = () => {
    // Implement delete selected logic if needed
    console.log('Deleting selected rows:', selectedRows);
    // You can remove the selected users from the state or mark them as deleted
    setUsers(prevUsers => prevUsers.filter(user => !selectedRows.includes(user.id)));
    // Clear the selected rows after deletion
    setSelectedRows([]);
  };

  const handleSelectAll = () => {
    // Implement select all logic
    const allRows = currentUsers.map(user => user.id);
    setSelectedRows(selectedRows.length === allRows.length ? [] : allRows);
  };

  return (
    <div className="app">
      <SearchBar onSearch={handleSearch} />
      <Table
        users={currentUsers}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onSelect={handleSelectAll}
        selectedRows={selectedRows}
      />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      <ActionButtons
        onDeleteSelected={handleDeleteSelected}
        onSelectAll={handleSelectAll}
        selectedRows={selectedRows}
      />
      <Dashboard editedCount={editedCount} deletedCount={deletedCount} />
    </div>
  );
};

export default App;
