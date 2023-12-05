import React from 'react'

export default function Child({color1}){
    return (
      <div>
        <h1>This is a child component</h1>
        <h1 style={{color:color1}}>Geeks for Geeks</h1> 
      </div>
    );
}