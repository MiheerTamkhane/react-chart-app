import Chart from "react-apexcharts";

export const MyChart = ({ data }) => {
  const series = [
    //data on the y-axis
    {
      name: "Y-axis data",
      data: data?.y,
    },
  ];
  const options = {
    //data on the x-axis
    chart: { id: data?.type },
    xaxis: {
      categories: data?.x,
    },
    colors: ["#319795"],
    fill: {
      colors: ["#319795"],
    },
  };

  return (
    <div className="chart-container">
      <h1>{data?.type.charAt(0).toUpperCase() + data?.type.slice(1)} Chart</h1>
      <Chart options={options} series={series} type={data?.type} width="600" />
    </div>
  );
};
