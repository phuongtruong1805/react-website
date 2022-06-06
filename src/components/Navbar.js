import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { MdFingerprint } from 'react-icons/md'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from './Button'
import { IconContext } from 'react-icons/lib'

function Navbar() {

  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setButton(true)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton)

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
              <MdFingerprint className="navbar-icon" />
              PWEB
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                <Link to='/' className="nav-links">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/Services' className="nav-links">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/Products' className="nav-links">
                  Products
                </Link>
              </li>
              <li className="nav-btn">
                {button ? (
                  <Link to='/sign-up' className="btn-link">
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn'
                    >
                      SIGN UP
                    </Button>
                  </Link>
                ) : (
                  <Link to='/sign-up' className="btn-link">
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                    >
                      SIGN UP
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  )
}

export default Navbar