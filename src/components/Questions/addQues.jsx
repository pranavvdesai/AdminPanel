import React, { useState } from 'react';
import axios from 'axios';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import { Grid } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import Switch from '@material-ui/core/Switch';
const formStyle = {
  marginTop: '1rem',
  marginBottom: '1rem',
  alignItems: 'center',
};

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: 'green',
  color: '#FFFFFF',
};

function Edit() {
  const token = localStorage.getItem("HH");
  const [ques_main, setQuestion] = useState("");
  const [domain, setDomain] = useState("");
  const [ques_type, setQuesType] = useState("");
  const [mark_each, setMarkEach] = useState("");
  const [options, setOptions] = useState([{}]);
  const [options1, setOptions1] = useState([]);
  const [ans1, a1] = useState("");
  const [ans2, a2] = useState("");
  const [ans3, a3] = useState("");
  const [ans4, a4] = useState("");
  console.log(`ans1 ${ans1}`);
  const answers = [ans1, ans2, ans3, ans4];
  // answers.push(ans1);
  // answers.push(ans2);
  // answers.push(ans3);
  // answers.push(ans4);
  console.log(`answersss: ${answers}`);
  console.log(typeof answers);
  const handleChangeArrayAddObject = event => {
    const name = "option";
    // answers.map((ans) => {
    //   console.log(`ans: ${ans}`)
    //   console.log("handleChangeAddAddObject: ", name, ans)
    //   setOptions(prevState => [...prevState, { [name]: ans }]);
    //   return null;
    // })
    for (const i in answers) {
      console.log("handleChangeAddAddObject: ", name, answers[i]);

      setOptions(prevState => [...prevState, { [name]: answers[i] }]);

    }
   
  };
  console.log("options: ", options);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        'https://recportal-iete.herokuapp.com/auth/quesadd/',
        {
          domain,
          ques_type,
          mark_each,
          ques_main,
          options1,
        },
        {
          headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div>
        <Card style={divStyle}>
          <Grid container spacing={1} style={formStyle} className="text-green-600">
            
            <div item id="grid" className="flex flex-col justify-center align-middle items-center ml-40">
              <input
                type="number"
                name="domain"
                placeholder="Domain"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                required
              />
              <input
                type="number"
                name="ques_type"
                placeholder="Question type"
                value={ques_type}
                onChange={(e) => setQuesType(e.target.value)}
                required
              />
              <input
                type="number"
                name="mark_each"
                placeholder="Mark Each"
                value={mark_each}
                onChange={(e) => setMarkEach(e.target.value)}
                required
              />
              <input
                type="text"
                name="ques_main"
                placeholder="Ques Main"
                value={ques_main}
                onChange={(e) => setQuestion(e.target.value)}
                required
              />
              <input
                type="text"
                name="ans1"
                placeholder="Ans 1"
                value={options.code}
                onChange={(e) => a1(e.target.value)}
              />
              <input
                type="text"
                name="ans2"
                placeholder="Ans 2"
                value={options.code}
                onChange={(e) => a2(e.target.value)}
              />
              <input
                type="text"
                name="ans3"
                placeholder="Ans 3"
                value={options.code}
                onChange={(e) => a3(e.target.value)}
              />
              <input
                type="text"
                name="ans4"
                placeholder="Ans 4"
                value={options.code}
                onChange={(e) => a4(e.target.value)}
              />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                endIcon={<KeyboardArrowRightIcon />}
                onClick={handleChangeArrayAddObject}
              >
                Submit
              </Button>
            </div>
            <Grid item spacing={2} xs={12} md={12} id="grid">
              <Button
                type="submit"
                color="primary"
                variant="contained"
                endIcon={<KeyboardArrowRightIcon />}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Card>
        <Divider />
      </div>
    </form>
  );
}

export default Edit;
