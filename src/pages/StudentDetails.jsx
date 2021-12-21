import React from 'react'
import Domains from '../components/Domains'
function StudentDetails() {
    if (
        localStorage.getItem("HH") === null ||
        localStorage.getItem("HH") === ""
      ) {
        window.location.href = "/";
      }
    const [link, setLink] = React.useState('/domains/')
    const [domains, setDomains] = React.useState([
        {
            id: '1',
            name: 'CCE',
            description: 'Electronics and Communication Engineering',
        },
        {
            id: '2',
            name: 'ECE',
            description: 'Computer Science Engineering',
        },
        {
            id: '3',
            name: 'CP',
            description: 'Computer Science Engineering',
        },
        {
            id: '4',
            name: 'ECE',
            description: 'Computer Science Engineering',
        }
    ]);
    return (
        <div>
            <h1 className=" mb-5 ml-3">sdjkabdkjas</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2 mx-3">
                <Domains name={domains[0].name} id={domains[0].id} link={link}/>
                <Domains name={domains[1].name} id={domains[1].id} link={link}/>
                <Domains name={domains[2].name} id={domains[2].id} link={link}/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2 mt-2 lg:mt-10 mx-3">
                              
                <Domains name={domains[1].name} id={domains[0].id} link={link}/>
                <Domains name={domains[0].name} id={domains[0].id} link={link}/>
                <Domains name={domains[1].name} id={domains[0].id} link={link}/>
            </div>
        </div>
    )
}

export default StudentDetails
