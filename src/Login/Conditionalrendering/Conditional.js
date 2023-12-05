import React, {useState} from 'react'
import Signin from '../Signuppages/Signin';
import Signup from '../Signuppages/Signup';

function Conditional() {

    const [state,setState] = useState({isLogged:true});

  return (
    state.isLogged ? <Signin/> : <Signup/>
  )
}

export default Conditional