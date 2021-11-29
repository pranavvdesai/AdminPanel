import React, {useState} from 'react'
import arrow from '../../assets/images/arrow.svg'
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { CardHeader } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
function CardComp({ ques }) {
    const [update, setUpdate] = useState(ques)
    const token = localStorage.getItem("HH");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(
                `https://recportal-iete.herokuapp.com/auth/quesansadmin`,
                {
                    update
                },
                {
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${token}`,
                    },
                }
            )
            .then((res) => {
                window.location.href = '.';
            })
            .catch((error) => { });
    }
    return (
        <div>
             <Link to="/questions">
        <img src={arrow} alt="arrow" className="text-green-600 bg-black absolute top-32 px-3 md:px-8 " />
            </Link>
        <Grid className="cardContainer mt-4 ">
                <Card className="bg-green-700 py-7">
                <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
        {/* <CardHeader title="hello" className=" bg-green-700 px-32"/> */}
                        <input value={update} onChange={(e) => setUpdate(e.target.value)}></input>
                        <Button type="submit" className="bg-green-700 text-white">
                            Update
                        </Button>
 </form>
        </Card>
                
    </Grid>
        </div>
    )
}

export default CardComp
