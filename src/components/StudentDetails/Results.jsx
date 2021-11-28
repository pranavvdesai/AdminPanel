import React, {useEffect, useState} from 'react'
import Table from '../Table'
import { useLocation } from 'react-router-dom';
import arrow from '../../assets/images/arrow.svg'
import { Link } from 'react-router-dom'
import axios from 'axios'
function Results() {
    const [students, setStudents] = useState([])
    const location = useLocation();
    const { pathname } = location;
    let path = pathname.split('/')[2];
    useEffect(() => {
        const token = localStorage.getItem("HH");
        
        axios
            .get(`https://recportal-iete.herokuapp.com/auth/a/${path}/`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
            .then((response) => {
              console.log(response.data)
                setStudents(response.data)
            })
            .catch((error) => console.error(error.response));
        
      }, []);
    return (
        <div>
        <Link to="/studentDetails">
        <img src={arrow} alt="arrow" className="text-green-600 bg-black absolute top-32 px-3 md:px-8 " />
        </Link>
        <div className="px-3 md:px-8 h-auto mt-32">
                  <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 px-4 mb-16">
                        <Table students = {students}/>
                      </div>
                  </div>
              </div>
      </div>
    )
}

export default Results
