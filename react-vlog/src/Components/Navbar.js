import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css';
import { Button } from './Button';
//import { SiJameson } from "react-icons/si";
//import { SiDictionarydotcom } from "react-icons/si";
function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
        window.addEventListener('resize', showButton);
        return () => {
            window.removeEventListener('resize', showButton);
        }
    }, []);

    window.addEventListener('resize', showButton);
  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <h2>Gym</h2>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/fitness' className='nav-links' onClick={closeMobileMenu}>
                        Fitness
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/diet' className='nav-links' onClick={closeMobileMenu}>
                        Diet
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sign-Up' className='nav-links-mobile' onClick={closeMobileMenu}>
                        Sign-Up
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>Sign-Up</Button>}
            </div>
        </nav>
    </>
  )
}

export default Navbar