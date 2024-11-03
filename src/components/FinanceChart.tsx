"use client";

import Image from "next/image";

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

const data = [
  {
    name: "Jan",
    income: 700,
    expense: 2400,
  },
  {
    name: "Feb",
    income: 300,
    expense: 1398,
  },
  {
    name: "Mar",
    income: 200,
    pv: 9800,
  },
  {
    name: "Apr",
    income: 600,
    expense: 3908,
  },
  {
    name: "May",
    income: 100,
    expense: 4800,
  },
  {
    name: "Jun",
    income: 900,
    expense: 3800,
  },
  {
    name: "Jul",
    income: 340,
    expense: 4300,
  },
  {
    name: "Aug",
    income: 730,
    expense: 4300,
  },
  {
    name: "Sep",
    income: 230,
    expense: 4300,
  },
  {
    name: "Oct",
    income: 210,
    expense: 4300,
    amt: 2100,
  },
  {
    name: "Nov",
    income: 750,
    expense: 4300,
  },
  {
    name: "Dec",
    income: 410,
    expense: 4300,
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Finance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd"/>
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} tickMargin={20} />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#c3bbfa"
            strokeWidth={5}
          />
          <Line type="monotone" dataKey="expense" stroke="#cfceff" strokeWidth={5}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
