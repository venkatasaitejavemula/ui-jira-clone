import React, { useState } from "react";
import * as d3 from "d3";
import PieChart from "./components/PieChart";
const Reports = () => {
  const [data, setData] = useState([
    { label: "A", value: 30 },
    { label: "B", value: 80 },
    { label: "C", value: 45 },
    { label: "D", value: 60 },
    { label: "E", value: 20 },
    { label: "F", value: 90 },
    { label: "G", value: 55 },
  ]);
  return (
    <div>
      Reports
      <PieChart data={data} />
    </div>
  );
};

export default Reports;
