import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import {} from "@fortawesome/free-solid-svg-icons"


import { useLogout } from '../hooks/useLogout'

//import useLogin
// import { useLogin } from '../hooks/useLogin'
import './Navbar.css'
import Dropdown from './Dropdown'

const Navbar = () => {
    
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const { logout } = useLogout()
    // const { user } = useLogin()

    const handleClick = () => {
      logout()
      setClick(!click);      
    }

    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(true);
      }
    };

    const onMouseLeave = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(false);
      }
    };
    
    return(
        <header>
            <div className="navbar">
                <Link to="/" className='navbar-logo'>
                  <h1>PSI Ψ</h1>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fa-solid fa-times' : 'fa-solid fa-bars'} />
                  <FontAwesomeIcon icon={faBars}
                  className="fa-solid fa-bars" />
                  <FontAwesomeIcon icon={faTimes}
                  className="fa-solid fa-times" />
                  {/* <FontAwesomeIcon icon="fa-solid fa-bars" /> */}
                  {/* <svg xmlns="http://www.w3.org/2000/svg" height="50px" width="150px" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>                 */}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  
                  <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                     Home
                    </Link>
                  </li>

                <div className='results'>
                  {/* <div className='nav-links'></div> */}
                    {/* <li className="dropdown" */}
                    <li className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        >

                    <Link to="/CreateResult"
                      className='nav-links'
                      onClick={closeMobileMenu}
                    >
                      Create Result <i className='fas fa-caret-down' />
           {/* <ul className="dropdown-content"> */}
            {/* <NavLink to="/CreateResult/100L-first-semester">100 Level First Semester</NavLink>
            <NavLink to="/CreateResult/100L-second-semester">100 Level Second Semester</NavLink>
            <NavLink to="/CreateResult/200L-first-semester">200 Level First Semester</NavLink>
            <NavLink to="/CreateResult/200L-second-semester">200 Level Second Semester</NavLink>
            <NavLink to="/CreateResult/300L-first-semester">300L First Semester</NavLink>
            <NavLink to="/CreateResult/300L-second-semester">300 Level Second Semester</NavLink>
            <NavLink to="/CreateResult/400L-first-semester">400L First Semester</NavLink>
            <NavLink to="/CreateResult/400L-second-semester">400 Level Second Semester</NavLink> */}
          {/* </ul> */}
          </Link>
          {dropdown && <Dropdown />}
        </li>

        <li className='nav-item'>
          <Link to='/ViewResults' className='nav-links' onClick={closeMobileMenu}>
            View Results
          </Link>
        </li>
        <li className='nav-item'>
          {/* <Link to='/profile' className='nav-links' onClick={closeMobileMenu}>
            Profile
          </Link> */}
        </li>
        <li className='nav-item'>
          <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
            Contact Us
          </Link>
        </li>
                </div>
                <nav>
                  
                    {/* {user && ( */}
                        <div>
                          {/* <span>{user.email}</span> */}
                          <button onClick={handleClick}>Log out</button>
                        </div>
                    {/* )} */}
                    {/* {!user && ( */}
                        <div>
                          <Link to="/login">Login</Link>
                          <Link to="/signup">Signup</Link>
                        </div>
                    {/* )} */}
                </nav>
              </ul> 
            </div>
        </header>
        
    )
}

export default Navbar;