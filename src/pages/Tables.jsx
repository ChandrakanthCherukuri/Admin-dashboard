import React, { useState } from "react";

const initialData = [
  { id: 1, name: "Alice", email: "alice@example.com", role: "Admin" },
  { id: 2, name: "Bob", email: "bob@example.com", role: "Editor" },
  { id: 3, name: "Charlie", email: "charlie@example.com", role: "Viewer" },
  { id: 4, name: "David", email: "david@example.com", role: "Editor" },
];

const UsersTable = () => {
  const [data, setData] = useState(initialData);
  const [filter, setFilter] = useState("");
  const [sortField, setSortField] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = (field) => {
    const order = sortField === field && sortOrder === "asc" ? "desc" : "asc";
    const sortedData = [...data].sort((a, b) => {
      if (a[field] < b[field]) return order === "asc" ? -1 : 1;
      if (a[field] > b[field]) return order === "asc" ? 1 : -1;
      return 0;
    });
    setSortField(field);
    setSortOrder(order);
    setData(sortedData);
  };

  const filteredData = data.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase()) ||
    user.email.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Users Table</h2>
      <input
        type="text"
        placeholder="Search by name or email"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-4 px-3 py-2 rounded border border-gray-300 dark:bg-gray-800 dark:text-white"
      />

      <div className="overflow-x-auto bg-white dark:bg-gray-900 rounded-xl shadow-md">
        <table className="min-w-full text-left text-sm text-gray-800 dark:text-white">
          <thead className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
            <tr>
              <th className="p-3 cursor-pointer" onClick={() => handleSort("name")}>
                Name {sortField === "name" ? (sortOrder === "asc" ? "▲" : "▼") : ""}
              </th>
              <th className="p-3 cursor-pointer" onClick={() => handleSort("email")}>
                Email {sortField === "email" ? (sortOrder === "asc" ? "▲" : "▼") : ""}
              </th>
              <th className="p-3">Role</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100 dark:hover:bg-gray-800">
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredData.length === 0 && (
          <p className="text-center p-4 text-gray-500">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default UsersTable;
