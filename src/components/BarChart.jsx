import axios from "axios";
import React from "react";
import { Bar } from "react-chartjs-2";
import { useEffect } from "react";

function BarChart() {
  const [data, setData] = React.useState({});
  useEffect(() => {
    var token = localStorage.getItem("HH");
    axios
      .get("https://recportal-iete.herokuapp.com/auth/studentcount/",
      {
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${token}`
        }
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      }
    );
  }, []);
  // console.log(Object.keys(data));
  var domains = Object.keys(data);
  var count = Object.values(data);
  var labelfetch = domains.slice(0, 5)
  var countfetch = count.slice(0, 5)
  var labelfetch2 = domains.slice(5, 7)
  var countfetch2 = count.slice(5, 7)
  // console.log(labels);
  const data1 = {
    labels: labelfetch,
    datasets: [
      {
        label: "# Students",
        data: countfetch,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)"

        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255,1)",
          "rgba(255, 159, 64, 1)"
        ],
        borderWidth: 1,
      },
    ],
    options: {
      legend: {
        labels: {
          fontColor: "#f00",
        },
      },
    }
  };
  const data2 = {
    labels: labelfetch2,
    datasets: [
      {
        label: "# Students",
        data: countfetch2,
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
      <div className=" mt-10 grid grid-cols-1 xl:grid-cols-5">
        <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
        <h1 className=" mb-5 ml-3 text-green-700 semi-bold text-3xl  w-1/2  border-b-4 border-green-700 p-2">Domains</h1>
          <Bar data={data1} options={options} />
        </div>
        <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14 ">
        <h1 className=" mb-5 ml-3 text-green-700 semi-bold text-3xl w-1/2 border-b-4 border-green-700 p-2">Students</h1>
          <Bar data={data2} options={options} />
        </div>
      </div>
      {/* <div className=" flex flex-col max-h-10 max-w-md align-middle ">
        <div className=" px-4 mb-14 align-middle">
          <h1>Domains</h1>
          <Bar data={data1} options={options} />
        </div>
        <div className="px-4 mb-14 ">
          <h1>Students</h1>
          <Bar data={data2} options={options} />
        </div>
      </div> */}
      
    </>
  );
}
export default BarChart;