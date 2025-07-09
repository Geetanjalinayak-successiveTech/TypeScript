"use client"

import { useState , useCallback} from "react";
import Child from "../Components/parent-child-callback";


export default function parent()
{
    const [count,setCount]= useState(0);
    const handleCount= useCallback(()=>{
        setCount(count+1);
    },[count])

    

    return(
        <div style={{padding: "100px", backgroundColor: "#f0f0f0", borderRadius: "8px", textAlign: "center"}}>
            <h4 style={{ color: "blue", fontSize: "24px", marginBottom: "20px" }}>Count:{count}</h4>
            <Child increment={handleCount} />
        </div>
        
    )
}