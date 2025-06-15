import React from 'react';
import '../styles/Tables.css'; // Adjust path if needed

const TablesPage = () => {
  return (
    <div className="table-container">
      <h2>Tables</h2>
      <input type="text" className="table-search" placeholder="Search..." />
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Chandu</td>
            <td>chandu@example.com</td>
            <td>Active</td>
          </tr>
          <tr>
            <td>Prakhar</td>
            <td>prakhar@example.com</td>
            <td>Active</td>
          </tr>
          <tr>
            <td>Priya</td>
            <td>priya@example.com</td>
            <td>Active</td>
          </tr>
          <tr>
            <td>Kowsik</td>
            <td>kowsik@example.com</td>
            <td>Inactive</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TablesPage;
