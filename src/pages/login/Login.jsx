import React, { useEffect } from 'react'
import styles from "./login.module.css"
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [formData, setFormData] = useState({
    email:"",
    password:""
})
const [allusers, setAllusers] = useState([])

let navigate = useNavigate()

function handleChange(e) {
   let {name, value} = e.target;
   setFormData({...formData, [name]: value} )
}

async function getformData() {
  let {data} = await axios.get("http://localhost:6060/users");
  console.log(data);
  setAllusers(data);
}

useEffect(()=>{
  getformData();
}, [])


function formSubmit(e) {
    e.preventDefault();
    console.log(formData)
    setFormData({email:"", password:""})
    let authUser = allusers.find((user)=>{
      return(
        user.email === formData.email && user.password === formData.password
      );
    });

    if(authUser){
      console.log("login successful");
      localStorage.setItem("userid", authUser.id)
      navigate("/allproducts")
      
    }else{
      console.log("please signup");
      
    }
  
}


  return (
    <div className="login1" id={styles.login} >
      <form onSubmit={formSubmit} >
      <h1>Login</h1>
        <br />
        <label>UserEmail</label>
        <input type="email" value={formData.email} onChange={handleChange} name='email'/>
        <br />
        <br />
        <label>Password</label>
        <input type="password" value={formData.password} onChange={handleChange} name='password'/>
        <br />
        <br />
        <button>submit</button>
      </form>
    </div>
  )
}

export default Login
