import React, {useState} from 'react'
import axios from 'axios';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import { useLocation } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import Slide from '@material-ui/core/Slide';
import './../main.css'
import arrow from '../../assets/images/arrow.svg'
import { Link } from 'react-router-dom'

function StudentAnswers({ answers }) {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const [checked, isChecked] = useState(answers.is_checked);
    const [marks, setMarks] = useState(answers.mark_ques);
    const [id, setID] = useState(answers.question.id);
    const [btn, setColor] = useState('yellow');
    const location = useLocation();
    const { pathname } = location;
    let user = parseInt(pathname.split('/')[3]);
    let domain = parseInt(pathname.split('/')[2]);
    var token = localStorage.getItem('HH');
    var comments = "fnewfbjkebf"
    function click(){
        isChecked(!checked);
    }
    // function setid(e) {
    //     // setID(answers.question.id)
    //     console.log("hewerwer"+ answers.question.id)
    //     setInterval(Eval(e),10000)
    // }
    function Eval(e) {
        console.log(id)
        e.preventDefault();
        axios.post(`https://recportal-iete.herokuapp.com/auth/adminmarklong/`, {
            user,
            question: id,
            domain,
            marks,
            checked
        }, {
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                if (response.data.message) {
                    enqueueSnackbar('Marks Updated Succesfully', {
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
                    if (response.data.error) {
                        console.log(response);
                        enqueueSnackbar(`${response.data.error}`, {
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
                if (error.response.status === 403) { 
                    enqueueSnackbar('Awarded marks cannot be more than max marks', {
                        variant: 'error',
                        autoHideDuration: 2000,
                        anchorOrigin: {
                          vertical: 'top',
                          horizontal: 'right',
                        },
                        TransitionComponent: Slide,
                      })
                }
                if (error.response.status === 404) { 
                    enqueueSnackbar('Please fill in all the inputs', {
                        variant: 'error',
                        autoHideDuration: 2000,
                        anchorOrigin: {
                          vertical: 'top',
                          horizontal: 'right',
                        },
                        TransitionComponent: Slide,
                      })
                }
                // console.log(error);
                else {
                    enqueueSnackbar('Please fill in all the inputs', {
                        variant: 'error',
                        autoHideDuration: 2000,
                        anchorOrigin: {
                          vertical: 'top',
                          horizontal: 'right',
                        },
                        TransitionComponent: Slide,
                      })
                }
            })
        
    }
    console.log(checked)
    return (
        <div className="mx-12">
            
        <div className="flex flex-col justify-items-center align-middle mb-6 p-4 card">
        
                {/* <div className="mb-1">
                    <div className="flex flex-col justify-items-center align-middle mb-1">
                    <span className="mr-2 border-b-2 border-green-700 text-green-600 rounded-md p-1">Question:</span>

                            </div>
                    <span>
                        {answers.question.ques_main}

                    </span>
               </div> */}
               <div className="flex ">
                    <div className="mt-2 mb-3">
                    <span className="mr-2  text-green-600 rounded-md p-1">Question:</span>

                            
                            {answers.question.ques_main}
                   </div>
                   
                   
                   
                </div>
               <div className="flex ">
                    <div className="mt-2 mb-3">
                            {/* <span className="mr-3  bg-green-700 border-2 border-green-900 rounded-md p-1 text-black align-middle justify-items-center">Answer</span> */}
                            <span className="mr-2  text-green-600 rounded-md p-1">Answer:</span>

                        {answers.answer}
                   </div>
                   
                   
                   
                </div>
                {
                    answers.question.ques_type === 0 &&
                
                    <div className="flex flex-col border-t-2 border-green-700 mb-2 ">
                        <div className=" mt-2 mb-1">
                            <span className=" mt-2 rounded-md p-1 ">Marks: {answers.mark_ques}</span>/{answers.question.mark_each}
                        </div>
                        {/* <div className="mt-2 mb-1 mr-7 p-1 border-b-2 border-green-500  xl:w-1/12 w-1/12 lg:w-1/12 rounded-md"> */}
                        <div className="mt-2 mb-1 mr-7 p-1">
                            Type: {answers.question.ques_type === 0 ? "MCQ" : "Long Answer"}
                        </div>
                    </div>}
                {answers.question.ques_type === 1 && <div className="flex flex-col border-t-2 border-green-700 mb-2 ">
               <div className=" mt-2 mb-1">
               <span className="mr-2 mt-2 rounded-md p-1 mr-7 ">Marks:</span>   
                       <input type="number" className="border-2 rounded-md bg-black border-green-700 p-1 text-xs" placeholder="Enter the marks" value={marks} onChange={(e) => setMarks(parseInt(e.target.value))}></input> / {answers.question.mark_each}
                   </div>
                   <div>
                   {/* <span className="mr-2    rounded-md p-1 ">Checked?</span>   
<input type="checkbox" className="border-green-500" checked={checked} onClick={
                       click
                       } ></input> */}
                   </div>
                    <button className={`bg-${btn}-500 text-white font-bold py-2 px-4 rounded w-24 mt-2`} onClick={(e) => { Eval(e);  }}>
                   Evaluate
                    </button>
                    </div>
                    }
                    
        </div>
                    
        </div>
    )
}

export default StudentAnswers
