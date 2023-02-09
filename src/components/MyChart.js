import { useState } from "react";
import Chart from "react-apexcharts";

export const MyChart = () => {
  const [averageTemp, setAverageTemp] = useState([1000, 700, 300, 400]);
  const [date, setDate] = useState([12, 13, 14, 15]);

  const series = [
    //data on the y-axis
    {
      name: "Y-axis data",
      data: averageTemp,
    },
  ];
  const options = {
    //data on the x-axis
    chart: { id: "bar-chart" },
    xaxis: {
      categories: date,
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
