import React, { Component } from 'react'

export default class Settimeout extends Component {

    componentDidMount(){
        setTimeout(()=>{
            alert('Advertisement')
        },5000);
    }

    render() {
    return (
      <div></div>
    )
  }
}
