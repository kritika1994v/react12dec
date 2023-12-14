import React from 'react'
let currDate= new Date(1995, 2, 12 , 22);
currDate = currDate.getHours();
let greeting = ""
const Miniprac=()=> {

if(currDate > 1 && currDate < 12)
{
greeting = "Good Morning"
}
else if(currDate >= 12 && currDate < 19 )
{
    greeting = "Good AfterNoon"
}

else if(currDate > 19 && currDate > 24)
{
    greeting="Good Night"
}

  return (
    <>
    <h1> hiii Kritika   { greeting} </h1>
    
    </>
  )
}

export default Miniprac