import React from "react";
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, Tooltip, XAxis, YAxis, CartesianGrid, ResponsiveContainer,
} from "recharts";

const lineData = [
  { month: "Jan", value: 30 },
  { month: "Feb", value: 50 },
  { month: "Mar", value: 80 },
  { month: "Apr", value: 65 },
];

const barData = [
  { name: "Q1", sales: 4000 },
  { name: "Q2", sales: 3000 },
  { name: "Q3", sales: 2000 },
  { name: "Q4", sales: 2780 },
];

const pieData = [
  { name: "Development", value: 45 },
  { name: "Design", value: 25 },
  { name: "Marketing", value: 30 },
];

const COLORS = ["#4ade80", "#60a5fa", "#facc15"];

const ChartsPage = () => {
  return (
    <div className="grid gap-6 p-4 md:grid-cols-2">
      {/* Line Chart */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Monthly Performance</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={lineData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#4ade80" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Quarterly Sales</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={barData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="sales" fill="#60a5fa" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow md:col-span-2">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Project Allocation</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Tooltip />
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartsPage;
