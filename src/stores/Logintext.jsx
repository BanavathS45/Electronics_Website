import { faPlay,faPause } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
 const login1={
  width:"70px",
  height:"70px",
  backgroundColor:"red",
  borderRadius:"50%",
  fontSize:"40px",
  color:"white",
  display:"flex",
  justifyContent:"center",
  alignItems:"center"

 }
 const pause={
  display:"none"
 }
const Logintext = () => {
  // const [addBtn,setAddBtn]=useState(<FontAwesomeIcon icon={faPlay} />)
  const handlePlay=()=>{
    document.getElementById('login').play()
    document.getElementById("play").style.display="none";
    document.getElementById("pause").style.display="block";
  }
  const handlePause=()=>{
    document.getElementById('login').pause()
    document.getElementById("play").style.display="block";
    document.getElementById("pause").style.display="none";

  }
 
  return (
    <>
    
    <h1>Audio</h1>
    <img src="Mad.webp" alt="" width={"40%"}/>
 <audio id='login'>
  <source src= 'College Papa.mp3' />
 </audio>
 <button id="play" style={login1} onClick={handlePlay}><FontAwesomeIcon icon={faPlay} /></button>
 <button id="pause" onClick={handlePause} style={login1}  ><FontAwesomeIcon icon={faPause} /></button>
  
    </>
  )
}

export default Logintext