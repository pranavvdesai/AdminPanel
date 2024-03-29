import React from 'react'
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Progress from '@material-tailwind/react/Progress';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './main.css'
const map = {
    1: "CSE",
    2: "ECE",
    3: "EEE",
    4: "MECH",
}
function Table({ students }) {
    const currlocation = useLocation();
    const { pathname } = currlocation;
    let path = pathname.split('/')[2];
    
    return (
        <Card color=" black" className=" bg-black card">
            <CardHeader color="green" contentPosition="left">
                <h2 className="text-white text-2xl">Result Table</h2>
            </CardHeader>
            <CardBody >
                <div className="overflow-x-auto" >
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-semibold text-left">
                                    Name
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-semibold text-left">
                                    Reg. No
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-semibold text-left">
                                    Email
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-semibold text-left">
                                    Phone
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-semibold text-left">
                                    Domain
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-semibold text-left">
                                    Status
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-semibold text-left">
                                    MCQ marks
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-semibold text-left">
                                    Long Ans Marks
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-semibold text-left">
                                    Total
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-semibold text-left">
                                    Comments
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map(student => (
                        
                        <tr className=" ">
                                <th className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left text-green-600 font-semibold">
                                    <Link to={location => ({ ...location, pathname: `${path}/${student.student.id}` })} >
                                        {student.student.name}
                                        </Link>
                                </th>
                                <th className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left font-semibold">
                                    {student.student.reg_no}
                                </th>
                                <th className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left font-semibold">
                                    {student.student.email}
                                </th>
                                <th className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left font-semibold">
                                    {student.student.phone}
                                </th>
                                <th className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left font-semibold">
                                    {map[student.domain]}
                                </th>
                                <th className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left font-semibold">
                                    <i className="fas fa-circle fa-sm text-orange-500 mr-2"></i>{' '}
                                    {student.result_checked ? 'Evaluated' : 'Pending'}
                                </th>
                                <th className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-center  font-semibold">
                                    {student.MCQ_score}
                                </th>
                                <th className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-cenetr font-semibold">
                                {student.Long_Ans_Score}
                                    </th>
                                <th className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-center font-semibold">
                                {student.Total}
                                    </th>
                                <th className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left font-semibold">
                                {student.comments}
                                    </th>
                            </tr>
                        )

                        )}
                            
                            
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
}
export default Table;