import { useState } from "react";
import Chart from "react-apexcharts";

export const MyChart = ({ data }) => {
  const { x, y } = data;
  const series = [
    //data on the y-axis
    {
      name: "Y-axis data",
      data: y,
    },
  ];
  const options = {
    //data on the x-axis
    chart: { id: "bar-chart" },
    xaxis: {
      categories: x,
    },
    fill: {
      colors: ["#319795"],
    },
  };
  return (
    <div className="chart-container">
      <h1>Chart shown below</h1>
      <Chart options={options} series={series} type="bar" width="600" />
    </div>
  );
};
