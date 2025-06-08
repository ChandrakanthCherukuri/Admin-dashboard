import React from "react";
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", users: 400, sales: 2400 },
  { name: "Feb", users: 300, sales: 1398 },
  { name: "Mar", users: 500, sales: 9800 },
  { name: "Apr", users: 700, sales: 3908 },
  { name: "May", users: 600, sales: 4800 },
];

const pieData = [
  { name: "Completed", value: 40 },
  { name: "In Progress", value: 30 },
  { name: "Pending", value: 30 },
];

const COLORS = ["#10B981", "#3B82F6", "#F59E0B"];

const Charts = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Analytics</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Line Chart */}
        <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-100">User Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="users" stroke="#3B82F6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-100">Monthly Sales</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-md col-span-1 lg:col-span-2">
          <h3 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-100">Task Status</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Charts;
