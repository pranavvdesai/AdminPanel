import axios from 'axios';
/* eslint-disable react/jsx-key */
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Add from './addQues';
import Grid from '@material-ui/core/Grid';

import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';

import Card from './cards'

const UseStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    paddingRight: theme.spacing(4),
  },
  title: {
    flexGrow: 1,
  },
}));
const QuestionsCRUD = () => {
  const classes = UseStyles();
  const [questions, setQuestions] = useState([]);
  const location = useLocation();
  const { pathname } = location;
  let path = pathname.split('/')[3];
  // console.log(path);

  useEffect(() => {
    const token = localStorage.getItem("HH");
    
    axios
        .get(`https://recportal-iete.herokuapp.com/auth/quesansadmin/${path}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
      .then((response) => {
          const something = response.data.data;
        console.log(typeof something);
        console.log(something);
        setQuestions(something);
        })
        .catch((error) => console.error(error.response));
    
  }, []);

  return (
    <div>
       <main>
        <Container>
          <Add />
          <Grid container>
            {questions.map((question) => (
              <Grid item xs={12}>
                <Card ques={question.ques_main} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default QuestionsCRUD;
