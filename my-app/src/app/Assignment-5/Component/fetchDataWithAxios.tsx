"use client"

import axios from "axios";
import { useState ,useEffect } from "react";

export default function FetchDataWithAxios() {
  const [user, setUser] = useState([]);
  const [error, setError] = useState("");


  useEffect(()=>{axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => setUser(res.data))
    .catch(() => {
      setError("Can't Fetch Data");
    })},[]);

     if (error) return <p>{error}</p>;

    return (
    <main style={{ padding: 150 }}>
      <h1>Users</h1>
      <ul>
        {user.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> — {user.email}
          </li>
        ))}
      </ul>
    </main>
  );
}
