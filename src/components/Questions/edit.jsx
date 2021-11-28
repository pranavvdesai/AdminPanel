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
  const [options, setOptions] = useState([]);
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
          options,
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
            
            <Grid item xs={7} sm={3} md={3} xl={3} id="grid" className="flex mx-2">
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
            </Grid>
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
