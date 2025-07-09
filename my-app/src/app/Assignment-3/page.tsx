"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function QuestionPage() {
  const router = useRouter();
  

  return (
    <main>
      <ul>
        <li style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            textAlign: "center",
            fontWeight: "bold",
            transition: "transform 0.3s, box-shadow 0.3s",
          }}
          
        >
          <button
            onClick={() => router.push("Assignment-3/UserAuthentication")}
          >
            User Authentication
          </button>
        </li>

        <li
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            textAlign: "center",
            fontWeight: "bold",
            transition: "transform 0.3s, box-shadow 0.3s",
          }}
        >
          <button
            onClick={() => router.push("Assignment-3/AuthenticationAndTheme")}
          >
            User Authentication with Theme Prefrenece
          </button>
        </li>

        <li
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            textAlign: "center",
            fontWeight: "bold",
            transition: "transform 0.3s, box-shadow 0.3s",
          }}
        >
          <button onClick={() => router.push("Assignment-3/Question-3-4")}>
            
            Home | About | login | Dashboard
          </button>
        </li>


        <li
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            textAlign: "center",
            fontWeight: "bold",
            transition: "transform 0.3s, box-shadow 0.3s",
          }}
        >
          <button onClick={() => router.push("Assignment-3/product")}>
            
            Product Detail
          </button>
        </li>
      </ul>
    </main>
  );
}
