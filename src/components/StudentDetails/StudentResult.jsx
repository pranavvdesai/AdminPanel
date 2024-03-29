import React,{useEffect, useState} from 'react'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import StudentAnswers from './StudentAnswers';
import arrow from '../../assets/images/arrow.svg'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import Switch from '@mui/material/Switch';
import { useSnackbar } from 'notistack';
import Slide from '@material-ui/core/Slide'
function StudentResult() {
  let history = useHistory();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  // const [ischecked, setChecked] = useState(false);
    const [data, setData] = useState([]);
    const location = useLocation();
    const { pathname } = location;
    let path = parseInt(pathname.split('/')[2]);
  let pathid = parseInt(pathname.split('/')[3]);
  var token = localStorage.getItem('HH');
//   function click(){
//     setChecked(!ischecked);
// }
  const [comments, setComment] = useState('');
  console.log(comments)
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
 
  function Eval(e) {
    e.preventDefault();
    axios.post(`https://recportal-iete.herokuapp.com/auth/addcommentsadmin/`, {
        user: pathid,
        domain: path,
        comments
    }, {
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            if (response.data.message) {
                enqueueSnackbar('Comments added', {
                    variant: 'success',
                    autoHideDuration: 2000,
                    anchorOrigin: {
                      vertical: 'top',
                      horizontal: 'right',
                    },
                    TransitionComponent: Slide,
                  })                
            }
            else {
                console.log("adsadsad"+response)
                if (response.data.error) {
                    console.log(response);
                    enqueueSnackbar('Please fill up all the inputs', {
                        variant: 'error',
                        autoHideDuration: 2000,
                        anchorOrigin: {
                          vertical: 'top',
                          horizontal: 'right',
                        },
                        TransitionComponent: Slide,
                      })
                    console.log(response.data.error);
                }
            }
            console.log(response);
        })
        .catch(error => {
            
            console.log(error);
            
        })
    
}
  function FinalEval(e) {
    // console.log(ischecked)
    e.preventDefault();
    axios.post(`https://recportal-iete.herokuapp.com/auth/allanswerscheck/`, {
        user: pathid,
        domain: path,
    }, {
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            if (response.data.message) {
                enqueueSnackbar('Student Evaluated', {
                    variant: 'success',
                    autoHideDuration: 2000,
                    anchorOrigin: {
                      vertical: 'top',
                      horizontal: 'right',
                    },
                    TransitionComponent: Slide,
                  })                
            }
            else {
                console.log("adsadsad"+response)
                if (response.data.error) {
                    console.log(response);
                    enqueueSnackbar('Please fill up all the inputs', {
                        variant: 'error',
                        autoHideDuration: 2000,
                        anchorOrigin: {
                          vertical: 'top',
                          horizontal: 'right',
                        },
                        TransitionComponent: Slide,
                      })
                    console.log(response.data.error);
                }
            }
            console.log(response);
        })
        .catch(error => {
            
            console.log(error);
            
        })
    
}
  return (
    <div className="">
      <div>
        <button onClick= {() => history.goBack()}>
        <img src={arrow} alt="arrow" className="text-green-600 bg-black absolute top-24 px-3 md:px-8 " />
        </button>
      </div>
      <div className=" mt-10 ">
      <h1 className=" mb-5 ml-4 text-green-700 semi-bold text-3xl xl:w-1/6 w-1/2 lg:w-1/4 border-b-4 border-green-700 p-2 ">Answers</h1>

            {data.length > 0 ? data.map((item) => (
                <StudentAnswers answers={item} />
                
            )) : <div className="text-center text-green-700 mb-10 text-2xl">No answers</div>}
        <div className=" flex flex-col text-center md:flex-row justify-around">
          <div className="mb-4 ">
          Comment:
          <input type="text" className="border-2 rounded-md bg-black border-green-700 p-1 ml-2 text-xs" placeholder="Enter the Comments"  onChange={(e) => setComment(e.target.value)}></input>
          </div>
          <div className="mb-4">
          <button className="bg-green-700 text-white p-2 rounded-md" onClick={Eval}>Add Comment</button>
          </div>
          
          <div className="mb-4 ">
          {/* <input type="checkbox" className="border-2 rounded-md bg-black border-green-700 p-1 ml-2 text-xs" onClick={click}></input> */}
          
            <button className={`bg-green-700 text-white p-2 rounded-md `} onClick={FinalEval}>
                  Finish Evaluation
            </button> 
            </div>  
        </div>

        </div>
  </div>
    )
}

export default StudentResult
