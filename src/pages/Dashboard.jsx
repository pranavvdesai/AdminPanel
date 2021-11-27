import React from 'react'
import BarChart from '../components/BarChart';

function Dashboard() {
  if (
    localStorage.getItem("HH") === null ||
    localStorage.getItem("HH") === ""
  ) {
    window.location.href = "/";
  }
  return (
    <div>
            <BarChart />

    </div>
  )
}

export default Dashboard
