import React,{useEffect, useState} from 'react'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import StudentAnswers from './StudentAnswers';
function StudentResult() {
    const [data, setData] = useState([]);
    const location = useLocation();
    const { pathname } = location;
    let path = pathname.split('/')[2];
    let pathid = pathname.split('/')[3];
    useEffect(() => {
        const token = localStorage.getItem("HH");
        
        axios
            .get(`https://recportal-iete.herokuapp.com/auth/a/${path}/${pathid}/`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
          .then((response) => {
              const something = response.data;
            console.log(typeof something);
              console.log(something);
              setData(something);
            })
            .catch((error) => console.error(error.response));
        
      }, []);
    return (
        <div>
            {data.map((item) => (
                <StudentAnswers answers={item} />
                
            ))}
        </div>
    )
}

export default StudentResult
