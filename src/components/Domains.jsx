import React from 'react'
import { Link } from 'react-router-dom';
import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Button from '@mui/material/Button';
import './main.css'
import './Domains'
function Domains({name,id, link}) {
    return (
        <div className=" px-4 mb-2">
         <Card className=" card ">

            <CardBody className=" text-white  ">
                    <H6 color="white">{ name}</H6>
            </CardBody>

                <CardFooter>
                    <Link to={`${link}${id} `}>
                        
            <Button style={{
        backgroundColor: "rgba(4, 120, 87, 1)",
    }} variant="contained" className=" bg-green-700">EVALUATE</Button>
            </Link>

            </CardFooter>
        </Card>   
        </div>
    )
}

export default Domains

