import React from 'react'
import './Navbar.css';
import { Link, Button } from '@mui/material';

function NavBar() {
  return (
    <header className='header container-fluid mb-5'>
            <nav className="navbar container navbar-expand-lg navbar-light px-5">
            <Link className = "navbar-brand">
                <img src='/images/logo.svg' alt='Logo' width={200}  className='img-fluid ' />
            </Link>
            
            
            <button
            className="navbar-toggler py-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className=" nav navbar-nav ms-auto">
                <li className="nav-item active">
                    <Link to = '/' class="nav-link">Product</Link>
                </li>
                <li className="nav-item">
                    <Link to = '/' class="nav-link">Case Studies</Link>
                </li>
                <li className="nav-item">
                    <Link to = '/' class="nav-link" > Pricing </Link>
                </li>
                <li className="nav-item">
                    <Link to = '/' class="nav-link">Contact</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link">
                    <Button variant="contained" size="large" style={{ backgroundColor: '#020202', color: '#ffffff' }}>
                    Get Started
                    </Button>
                    </Link>
                </li>
                </ul>
              </div>
            </nav>
        </header>
  )
}

export default NavBar