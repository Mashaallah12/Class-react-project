import React, { Fragment } from 'react'
import styles from "./Navbar.module.css"
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    let user_id = localStorage.getItem("userid")
    console.log(user_id);
    
      let Navigate = useNavigate()

    function logout(){
        localStorage.removeItem("userid")
        Navigate("/")
    }
    return (
        <nav id={styles.navbar}>
            <figure><i className="ri-menu-line"></i></figure>

            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                {user_id ? (
                    <li onClick={logout}>logout</li>
                ):(
                    <Fragment>
                        <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                    <NavLink to="/signup">SignUp</NavLink>
                </li>
                    </Fragment>
                )}
            </ul>

        </nav>
    )
}

export default Navbar
