import React, { useEffect } from 'react'
import styles from "./login.module.css"
import axios from 'axios';
import { useState } from 'react';
const Login = () => {
  const [formData, setFormData] = useState({
    email:"",
    password:""
})
function handleChange(e) {
   let {name, value} = e.target;
   setFormData({...formData, [name]: value} )
}

async function getformData() {
  let {data} = await axios.get("http://localhost:6060/users");
  console.log(data);
}

useEffect(()=>{
  getformData();
}, [])


function formSubmit(e) {
    e.preventDefault();
    console.log(formData)
    setFormData({email:"", password:""})
  
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
