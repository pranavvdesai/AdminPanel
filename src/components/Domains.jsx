import React from 'react'
import { Link } from 'react-router-dom';
import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Button from '@mui/material/Button';

function Domains({name,id, link}) {
    return (
        <div className=" px-4 mb-2">
         <Card className=" bg-gray-700 border-green-500 ">

            <CardBody className=" text-white  ">
                    <H6 color="white">{ name}</H6>
            </CardBody>

                <CardFooter>
                    <Link to={`${link}${id} `}>
                        
            <Button variant="contained">Read More</Button>
            </Link>

            </CardFooter>
        </Card>   
        </div>
    )
}

export default Domains

