import React, {useState} from 'react'
import axios from 'axios';
import {useLocation} from 'react-router-dom';
function StudentAnswers({ answers }) {
    const [checked, isChecked] = useState(false);
    const [marks, setMarks] = useState(0);
    const [id, setID] = useState(0);
    const location = useLocation();
    const { pathname } = location;
    let user = parseInt(pathname.split('/')[3]);
    let domain = parseInt(pathname.split('/')[2]);
    var token = localStorage.getItem('HH');
    var comments = "fnewfbjkebf"
    function click(){
        isChecked(!checked);
        setID(answers.id)
    }
    function Eval(e) {
        e.preventDefault();
        axios.post(`https://recportal-iete.herokuapp.com/auth/adminmarklong/`, {
            user,
            question: id,
            domain,
            marks,
            comments
        }, {
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
        
    }
    console.log(checked)
    return (
        <div>
            <div className="flex flex-col">
                <div>
                {answers.question.ques_main}
                </div>
                <div className="flex ">
                    <div>
                        {answers.answer}
                    </div>
                    <div>
                        
                        <input type="number" className="border border-yellow-500" onChange={(e) => setMarks(parseInt(e.target.value))}></input>
                    </div>
                    <div>
                        <input type="checkbox" className="border-green-500" onClick={
                        click
                        } ></input>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={Eval}>
                    Evaluate
                </button>
                </div>
                
            </div>
        </div>
    )
}

export default StudentAnswers
