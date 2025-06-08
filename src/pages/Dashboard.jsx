import React from "react";

const cards = [
  {
    title: "Total Sales",
    value: "$15,400",
    bgColor: "bg-blue-500",
  },
  {
    title: "New Users",
    value: "328",
    bgColor: "bg-green-500",
  },
  {
    title: "Tasks Completed",
    value: "78%",
    bgColor: "bg-yellow-500",
  },
  {
    title: "Revenue",
    value: "$45,200",
    bgColor: "bg-purple-500",
  },
];

const Dashboard = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Dashboard Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl text-white shadow-lg ${card.bgColor}`}
          >
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <p className="text-2xl mt-2">{card.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
