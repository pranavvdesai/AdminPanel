import React from 'react'
import { Link } from 'react-router-dom';
import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Button from '@mui/material/Button';

function Domains({name,id, link}) {
    return (
        <div>
         <Card className="  ">

            <CardBody className="  ">
                    <H6 color="gray">{ name}</H6>
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

