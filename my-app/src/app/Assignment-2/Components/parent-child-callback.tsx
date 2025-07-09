"use client"



export default function Child(props)
{
    return(
    <main>
        <div>
            
            <button onClick={props.increment}> Click </button>
        </div>
    </main>
    )
    
}