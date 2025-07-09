//Q3. Create a functional component named Weather that accepts a prop called temperature (a number).
//Display a message like "It's sunny today!" if the temperature is above 25°C and "It's cold today!" if the temperature is below 10°C.
//Import and render the Weather component in the App component with different temperature values.


export default function Weather({temperature})
{
    let message="";
    if(temperature>25)
    {
        message="Its sunny today";
    }

    else if(temperature<10)
    {
        message="It's cold today";
    }

    else{
        message="It's a moderate day";
    }

    return(
        <div>
            <p>Temperature: {temperature}</p>
            <p>{message}</p>
        </div>
    )
    
    
}
