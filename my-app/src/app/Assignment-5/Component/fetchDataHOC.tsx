"use client";
import { useState, useEffect } from "react";
import axios from "axios";

export default function FetchData() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUser(res.data));
  }, []);

  return (
    <main style={{padding:150}}>
      <h2>Users</h2>
      <ul>
      {user.map((ele) => 
        <li key={ele.id}>
          <strong>{ele.name}</strong> — {ele.email}
        </li>
      )}
      </ul>
    </main>
  );
}
