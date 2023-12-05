import React, { useState } from "react";

function Usecontext () {
    const [user] = useState("Anjali");

  return (
    <div>
        <h1>Without Usecontext</h1>
        <h1>{`Hello ${user}!`}</h1>
        <Component2 user={user}/>
    </div>
  );
}

function Component2({user}){
    return(
        <div>
            <h1>Component 2 {user} </h1>
            <Component3 user={user}/>
        </div>
    );
}

function Component3({user}){
    return(
        <div>
            <h1>Component 3 {user} </h1>
            <Component4 user={user}/>
        </div>
    );
}

function Component4({user}){
    return(
        <div>
            <h1>Component 4 {user} </h1>
            <Component5 user={user}/>
        </div>
    );
}

function Component5({user}){
    return(
        <div>
            <h1>Component 5</h1>
            <h2>{`Hello ${user} again!`}</h2>
        </div>
    );
}

export default Usecontext