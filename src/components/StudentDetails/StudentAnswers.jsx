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
                setColor('red');
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
        
    }
    console.log(checked)
    return (
        <div>
        <div className="flex flex-col justify-items-center align-middle mb-6 ">
               
               <div>
               <span className="mr-2 bg-green-400 border-2 ">Question:</span>   
                  {answers.question.ques_main}
               </div>
               <div className="flex ">
                   <div>
                       Answer: 
                       {answers.answer}
                   </div>
                   
                   
                   
                </div>
                <div className="flex flex-col  ">
               <div>
                       Marks: 
                       <input type="number" className="border border-yellow-500" onChange={(e) => setMarks(parseInt(e.target.value))}></input>
                   </div>
                   <div>
                       checked?<input type="checkbox" className="border-green-500" onClick={
                       click
                       } ></input>
                   </div>
                   {answers.question.ques_type === 1 && <button className={`bg-${btn}-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-24`} onClick={Eval}>
                   Evaluate
               </button>
                    }
                    </div>
        </div>
                    
     
          
        </div>
    )
}

export default StudentAnswers
