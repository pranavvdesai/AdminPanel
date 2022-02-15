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
            name: 'CSE',
            description: 'Electronics and Communication Engineering',
        },
        {
            id: '2',
            name: 'ECE',
            description: 'Computer Science Engineering',
        },
        {
            id: '6',
            name: 'Photography',
            description: 'Computer Science Engineering',
        },
        {
            id: '4',
            name: 'Design',
            description: 'Computer Science Engineering',
        },
        {
            id: '5',
            name: 'Management',
            description: 'Computer Science Engineering',
        },
        {
            id: '3',
            name: 'Editorial',
            description: 'Computer Science Engineering',
        }
    ]);
    return (
        <div>
            <h1 className=" mb-5 ml-3 text-green-700 semi-bold text-3xl xl:w-1/6 w-1/2 lg:w-1/4 border-b-4 border-green-700 p-2">Domains</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2 mx-3">
                <Domains name={domains[0].name} id={domains[0].id} link={link}/>
                <Domains name={domains[1].name} id={domains[1].id} link={link}/>
                {/* <Domains name={domains[2].name} id={domains[2].id} link={link}/> */}
            
                              
                <Domains name={domains[3].name} id={domains[3].id} link={link}/>
                <Domains name={domains[4].name} id={domains[4].id} link={link}/>
                <Domains name={domains[5].name} id={domains[5].id} link={link}/>
            </div>
        </div>
    )
}

export default StudentDetails
