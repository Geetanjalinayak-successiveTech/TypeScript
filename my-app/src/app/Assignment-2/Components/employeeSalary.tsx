"use client";

import { useState, useMemo } from "react";

export default function EmployeeSalary() {
  const empDetails = [
    { name: "A", salary: 20000 },
    { name: "B", salary: 250000 },
    { name: "C", salary: 30000 },
  ];
  const [employee, setEmployee] = useState(empDetails);

  const averageSalary = useMemo(() => {
    let sum = employee.reduce((init, emp) => init + emp.salary, 0);
    const avg = sum / employee.length;
    return avg;
  }, [employee]);

  const updateSalary=()=>{
    setEmployee((prev)=>prev.map((prev)=>({...prev, salary:Math.floor(Math.random()*500000)})))
  }

  return (
    <main>
      <h1>Employee Salary</h1>

      <ul>
        {employee.map((emp, index) => 
          <li key={index}>
            
            {emp.name} : {emp.salary}
          </li>
        )}
      </ul>

      <h4>Average Salary: {averageSalary}</h4>
      <button onClick={updateSalary}>Update Salaries</button>
    </main>
  );
}
