import React from 'react'
import { useState } from 'react';
const Signup = () => {
  const [formData, setFormData] = useState({
    userName:"",
    email: "",
    password: ""
  })
  function handleChange(e) {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }
  function formSubmit(e) {
    e.preventDefault();
    console.log(formData)


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
