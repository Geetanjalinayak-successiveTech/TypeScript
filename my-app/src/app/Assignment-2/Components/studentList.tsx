"use client";

import { useMemo, useState } from "react";

export default function StudentList() {
  let studentList = ["Geetanjali ",  "Abhishek ", "Vaishnavi "];
  const [list, setList] = useState([studentList]);

  const addStudent = () =>
    setList((prevStudents) => [
      ...prevStudents,
      `Student ${prevStudents.length + 1}`,
    ]);

  const memoisedStudents = useMemo(() => list, [list]);
  return (
    <main>
      <h1>Student List</h1>
      <ul>
        {memoisedStudents.map((ele, index) => (
          <li key={index}>{ele}</li>
        ))}
      </ul>

      <button onClick={addStudent}> Add New Student</button>
    </main>
  );
}
