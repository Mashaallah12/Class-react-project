import React from 'react'
import styles from "./Navbar.module.css"
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav id={styles.navbar}>
            <figure><i class="ri-menu-line"></i></figure>

            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                    <NavLink to="/signup">SignUp</NavLink>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar
