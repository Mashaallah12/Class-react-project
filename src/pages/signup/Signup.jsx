import React from 'react'
import { useState } from 'react';
import axios from 'axios';
const Signup = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: ""
  })
  function handleChange(e) {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }
   async function formSubmit (e) {
    e.preventDefault();
    console.log(formData)
    setFormData({ userName: "",email: "",password: "" })//for empty the input field
    try {
      let resp = await axios.post("http://localhost:6060/users", formData)
      console.log(resp);
      console.log("data sent successfully");
      
      
    } catch (error) {
      console.log(error);
      console.log("erro while sending data");
      
      
    }

  }
  return (
    <div>
      <form onSubmit={formSubmit}>
        <h1>SignUp</h1>
        <br />
        <label>UserName</label>
        <input type="text" value={formData.userName} onChange={handleChange} name='userName' />
        <br />
        <br />
        <label>UserEmail</label>
        <input type="email" value={formData.email} onChange={handleChange} name='email' />
        <br />
        <br />
        <label>Password</label>
        <input type="password" value={formData.password} onChange={handleChange} name='password' />
        <br />
        <br />
        <button>submit</button>
      </form>
    </div>
  )
}

export default Signup
