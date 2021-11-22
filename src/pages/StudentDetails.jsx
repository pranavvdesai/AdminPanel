import React from 'react'
import Domains from '../components/Domains'
function StudentDetails() {
    const [link, setLink] = React.useState('/domains/')
    const [domains, setDomains] = React.useState([
        {
            name: 'ECE',
            description: 'Electronics and Communication Engineering',
        },
        {
            name: 'CSE',
            description: 'Computer Science Engineering',
        }
    ]);
    return (
        <div>
            <h1>sdjkabdkjas</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2">
                <Domains name={domains[1].name} link={link}/>
                <Domains name={domains[0].name} link={link}/>
                <Domains name={domains[1].name} link={link}/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2 mt-12">
            <Domains name={domains[1].name}/>
                <Domains name={domains[0].name} link={link}/>
                <Domains name={domains[1].name} link={link}/>
            </div>
        </div>
    )
}

export default StudentDetails
