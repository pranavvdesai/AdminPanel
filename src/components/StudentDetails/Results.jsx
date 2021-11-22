import React from 'react'
import Table from '../Table'
import arrow from '../../assets/images/arrow.svg'
import { Link } from 'react-router-dom'

function Results() {
    return (
        <div>
        <Link to="/studentDetails">
        <img src={arrow} alt="arrow" className="text-green-600 bg-black absolute top-32 px-3 md:px-8 " />
        </Link>
        <div className="px-3 md:px-8 h-auto mt-32">
                  <div className="container mx-auto max-w-full">
                      <div className="grid grid-cols-1 px-4 mb-16">
                          <Table />
                      </div>
                  </div>
              </div>
      </div>
    )
}

export default Results
