import React from 'react'
import { Link } from 'react-router-dom'
import { GoTasklist } from "react-icons/go";
import  '../styles/Navbar.css';


function Navbar() {
  return (
    <header className='container'>
            <nav className='nav'>
                <Link to="/"> 
                <h1 className='logo'> TODO LIST <GoTasklist/> </h1>
                </Link>
                <Link to="/task" className="nav-link">
                      Task
                </Link>
            </nav>
        </header>
  )
}

export default Navbar