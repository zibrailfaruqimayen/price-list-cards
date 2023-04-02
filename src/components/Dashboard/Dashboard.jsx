import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const marksArray = [
    {
      id: 1,
      name: "student-1",
      math: 85,
      physics: 76,
      chemistry: 92,
    },
    {
      id: 2,
      name: "student-2",
      math: 70,
      physics: 82,
      chemistry: 65,
    },
    {
      id: 3,
      name: "student-3",
      math: 95,
      physics: 89,
      chemistry: 90,
    },
    {
      id: 4,
      name: "student-4",
      math: 68,
      physics: 75,
      chemistry: 80,
    },
    {
      id: 5,
      name: "student-5",
      math: 92,
      physics: 87,
      chemistry: 95,
    },
    {
      id: 6,
      name: "student-6",
      math: 80,
      physics: 82,
      chemistry: 88,
    },
    {
      id: 7,
      name: "student-7",
      math: 75,
      physics: 83,
      chemistry: 78,
    },
    {
      id: 8,
      name: "student-8",
      math: 90,
      physics: 91,
      chemistry: 92,
    },
    {
      id: 9,
      name: "student-9",
      math: 78,
      physics: 82,
      chemistry: 70,
    },
    {
      id: 10,
      name: "student-10",
      math: 85,
      physics: 90,
      chemistry: 80,
    },
    {
      id: 11,
      name: "student-11",
      math: 73,
      physics: 81,
      chemistry: 85,
    },
    {
      id: 12,
      name: "student-12",
      math: 88,
      physics: 94,
      chemistry: 91,
    },
  ];

  return (
    <div className="container mx-auto mt-10">
      <LineChart width={1000} height={300} data={marksArray}>
        <Line dataKey="physics"></Line>
        <Line stroke="#82ca9d" dataKey="chemistry"></Line>
        <Line stroke="#8884d8" dataKey="math"></Line>
        <XAxis dataKey="name" />
        <YAxis></YAxis>
        <Tooltip></Tooltip>
      </LineChart>
    </div>
  );
};

export default Dashboard;
