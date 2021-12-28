import React, {useState} from 'react'
import axios from 'axios';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import {useLocation} from 'react-router-dom';
function StudentAnswers({ answers }) {
    const [checked, isChecked] = useState(false);
    const [marks, setMarks] = useState(0);
    const [id, setID] = useState(0);
    const [btn, setColor] = useState('yellow');
    const location = useLocation();
    const { pathname } = location;
    let user = parseInt(pathname.split('/')[3]);
    let domain = parseInt(pathname.split('/')[2]);
    var token = localStorage.getItem('HH');
    var comments = "fnewfbjkebf"
    function click(){
        isChecked(!checked);
        setID(answers.question.id)
    }
    function Eval(e) {
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
                    setColor('green');
                    alert(response.data.message);
                
                }
                else {
                    if (response.data.error) {
                        console.log(response.data.error);
                        setColor('red');
                        alert(response.data.error);
                    }
                }
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
        
    }
    console.log(checked)
    return (
        <div className="mx-10">
        <div className="flex flex-col justify-items-center align-middle mb-6 bg-gray-800 p-4 ">
               
                <div className="mb-1">
                    <div className="flex flex-col justify-items-center align-middle mb-1">
                    <span className="mr-2 border-b-2 border-green-700 text-green-600 rounded-md p-1">Question:</span>

                            </div>
                    <span>
                        {/* {answers.question.ques_main} */}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fugit blanditiis corporis quos molestiae ratione error doloremque adipisci quia, deleniti, consequuntur eligendi, facilis explicabo? Voluptates asperiores minima quidem unde! Laudantium?

                    </span>
               </div>
               <div className="flex ">
                    <div className="mt-2 mb-3">
                            <span className="mr-3  bg-green-700 border-2 border-green-900 rounded-md p-1 text-black align-middle justify-items-center">Answer</span>
                            
                        {/* {answers.answer} */}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, vel placeat impedit recusandae illum sed accusantium? Ab, beatae sit! Eum numquam voluptates repellendus. Odit rerum aperiam, nam cum aliquam earum.
                   </div>
                   
                   
                   
                </div>
                <div className="flex flex-col border-t-2 border-green-700 mb-2 ">
               <div className=" mt-2 mb-1">
               <span className="mr-2 mt-2 rounded-md p-1 mr-7 ">Marks:</span>   
                       <input type="number" className="border-2 rounded-md bg-black border-green-700 p-1 text-xs" placeholder="Enter the marks" onChange={(e) => setMarks(parseInt(e.target.value))}></input>
                   </div>
                   <div>
                   <span className="mr-2    rounded-md p-1 ">Checked?</span>   
<input type="checkbox" className="border-green-500" onClick={
                       click
                       } ></input>
                   </div>
                   {answers.question.ques_type === 1 && <button className={`bg-${btn}-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-24 mt-2`} onClick={Eval}>
                   Evaluate
               </button>
                    }
                    </div>
        </div>
                    
     
          
        </div>
    )
}

export default StudentAnswers
