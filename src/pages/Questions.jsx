import React from 'react'
import Table from '../components/Table';
import Domains from '../components/Domains'

function Questions() {
  const [link, setLink] = React.useState('/domains/questions/')
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
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2">
                <Domains name={domains[1].name} link={link}/>
                <Domains name={domains[0].name} link={link}/>
                <Domains name={domains[1].name} link={link}/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2 mt-12">
            <Domains name={domains[1].name} link={link}/>
                <Domains name={domains[0].name} link={link}/>
                <Domains name={domains[1].name} link={link}/>
            </div>
    </div>
  )
}

export default Questions

