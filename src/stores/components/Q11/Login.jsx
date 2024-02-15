import React, { useState } from 'react'
import '../Q11/login.css'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const[inputs,setInputs]=useState({
    email:"",
    password:"",
  })
  const navigate=useNavigate()
  const handleLogin =(e)=>{
    e.preventDefault();
const loggedUser=JSON.parse(localStorage.getItem("users"));
if(inputs.email===loggedUser.email && inputs.password === loggedUser.password){
  alert("Login Successfull.... welcom,  "+ inputs.email)
  navigate('/')
  localStorage.setItem("loggedin",true)
}
else{
  alert("wrong email ID or Password")
}
  }
  return (
    <>
 
    <div className='bg'>
      <Link to='/' className='emart' >E-Mart</Link>
      <Link to='/registar' className='btn signUp' >SignUp</Link>
      <div className="loginCard">
      <h2 className=' head mb-2  '>E-Mart Login</h2>
      <form  >
  <div className="form-group ">
    <label for="exampleInputEmail1"   onChange={(e)=>e.target.value}>Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
     name='email'
     value={inputs.email} 
      onChange={(e) =>setInputs({...inputs,[e.target.name]:e.target.value})}
    />
    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
     name='password'
     value={inputs.password} 
      onChange={(e) =>setInputs({...inputs,[e.target.name]:e.target.value})}
    />
  </div>
 
  <Link   type="submit" className="btn btn-primary mt-3 submit" onClick={handleLogin}>Login</Link>
  <Link type="submit" className="  mt-3  ">Forget Password</Link>
  <button type="submit" className="btn btn-success mt-5 w-100   ">Login With Google</button>
  <button type="submit" className="btn btn-success mt-2 w-100   ">Login With Facebook</button>
</form>

      </div>
      </div>

      </>
  )
}

export default Login