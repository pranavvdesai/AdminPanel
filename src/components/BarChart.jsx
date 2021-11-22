import React from "react";
import { Bar } from "react-chartjs-2";

 function BarChart() {
  const data1 = {
    labels: ["CSE", "ECE", "HARDWARE", "CP"],
    datasets: [
      {
        label: "# Students",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const data2 = {
    labels: ["Checked", "Pending"],
    datasets: [
      {
        label: "# Checked",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true
      },
    },
  };
  return (
    <>
      <div className=" grid grid-cols-1 xl:grid-cols-5">
        <div className="xl:col-start-1 xl:col-end-3 px-4 mb-14">
          <h1>Domains</h1>
          <Bar data={data1} options={options} />
        </div>
        <div className="xl:col-start-3 xl:col-end-5 px-4 mb-14 ">
          <h1>Students</h1>
          <Bar data={data2} options={options} />
        </div>
      </div>
      
    </>
  );
}
export default BarChart;