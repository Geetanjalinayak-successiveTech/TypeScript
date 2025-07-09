"use client";

import { createContext } from "react";
import { useState } from "react";
import Theme from "../Components/ThemeSwitcher";

const ThemeContext = createContext();

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div  id="main" style={{backgroundColor:theme==="light"? "white":"black", padding:"200px", flex:"centre", alignItems:"centre"}}>
        <Theme />
      </div>
    </ThemeContext.Provider>
  )
}
export {ThemeContext};
