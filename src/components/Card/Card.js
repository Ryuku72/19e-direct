import React from "react";
import Number from "../Number/Number"
import "./style.css";

const departmentClassMap = {
  common: "bg-purple-300",
  marketing: "bg-gray-300",
  legal: "bg-blue-300",
  "research and development": "bg-pink-300",
  "information technology": "bg-green-300",
  enquiries: "bg-yellow-300"
}

function Card(props) {
  const departmentClass = departmentClassMap[props.department] || "bg-teal-300";

  console.log(props.length)
  return(
    <div className={`card relative flex flex-col items-center rounded-lg mt-4 shadow-lg text-xl font-mono p-5 text-gray-900 bg-gray-300 ${departmentClass}`} style={{ ...props.style}}>
      <div className="content p-3 capitalize">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Department:</strong> {props.department}
          </li>
          <li>
            <strong>Role:</strong> {props.role}
          </li>
          <li>
            <strong>Manager:</strong> {props.manager}
          </li>
          <li>
            <strong>Salary:</strong> <Number value = {props.salary} />
          </li>
          <li>
            <strong>Email:</strong><span className="lowercase"> {props.email}</span>
          </li>
        
        </ul>
      </div>
      <div className="absolute top-0 right-0 m-3">
        <button onClick={() => props.onHandleRemove(props.name)} className="text-red-700 text-xl m-1 w-10 flex justify-center">
      <i className="fas fa-trash-alt"></i></button>
      </div>
    </div>
  );
}

export default Card;