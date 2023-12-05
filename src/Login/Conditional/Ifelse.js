import React,{useState} from "react";
function Conditional(){
    const [state,setState]=useState({isLogged:true})
    /*if(state.isLogged){
        return(
            <h1>Welcome user</h1>
        )
    }
    else{
        return(
            <h1>Please login to continue...</h1>
        )
    }*/
    return (state.isLogged ? <h1>Welcome User</h1> : <h1>Please login to continue...</h1>);
}
export default Conditional