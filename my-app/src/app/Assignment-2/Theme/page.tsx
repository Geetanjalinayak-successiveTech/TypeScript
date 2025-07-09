"use client";

import { createContext, useState, ReactNode } from "react";
import Theme from "../Components/ThemeSwitcher";

// Define context type
type ThemeContextType = {
  theme: string;
  setTheme: (value: string) => void;
};

// Create context with type
const ThemeContext = createContext<ThemeContextType | null>(null);

export default function App() {
  const [theme, setTheme] = useState<string>("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        id="main"
        style={{
          backgroundColor: theme === "light" ? "white" : "black",
          color: theme === "light" ? "black" : "white",
          padding: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Theme />
      </div>
    </ThemeContext.Provider>
  );
}

export { ThemeContext };
