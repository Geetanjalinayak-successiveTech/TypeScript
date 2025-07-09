'use client';
import { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("Geetanjali");

  const login = () => setIsLoggedIn(true);

  return (
    <main style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "400px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        backgroundColor: "#fafafa",
        
      }}>
    <AuthContext.Provider value={{ isLoggedIn, login, username }}>
      {children}
    </AuthContext.Provider>
    </main>
  );
}