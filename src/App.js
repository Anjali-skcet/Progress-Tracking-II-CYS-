import React from 'react'
import './App.css'
import img from './Login/Image/Clg logo.jpg'
import photo from './Login/Image/SKCET.jpg'
const App = () => {
  return (
    <>
      <div className='text'>
        <h1>Anjali</h1>
        <h2>Sri Krishna College of Engineering and Technology</h2>
        <h3>Cyber Security</h3>
        <img id="I1" src={img} alt="College Logo"></img>
        <br></br>
        <br></br>
        <a href="https://www.skcet.ac.in/" target='blank'>Click here</a>
        <br></br><br></br>
        <img id="I2" src={photo} alt="College Campus"></img>
        <h2>Departments</h2>
        <ul><h4>
          <li>CSE</li>
            <ol>
              <li>Cyber Security</li>
              <li>Business System</li>
              <li>Design</li>
            </ol>
          <li>AI</li>
            <ol>
              <li>AIDS</li>
              <li>AIML</li>
            </ol>
          <li>IT</li>
          <li>Civil</li>
          <li>EEE</li>
          <li>ECE</li>
          </h4>
        </ul>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/g_inCIn0TSc?si=L4As74sZxZMfWiia" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </>
  )
}

export default App