import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaStream, FaTimes } from 'react-icons/fa';
import SideNav from './SideNav';

const Navbar = () => {
    const [burgerIsActive, setBurgerIsActive] = useState(false);

    const toggleBurger = () => {
        setBurgerIsActive(!burgerIsActive);
    }

    return (
        <>
            <div className="navWrapper">
            <div className="logo">
                <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
                    <h2>ThreeSixty</h2>
                </Link>
            </div>
            <div className="navButtons">
                <div className="navButtonItem">
                    <Link to='/' style={{ textDecoration: 'none', color: '#fff' }} className="navLink">
                        HOME
                    </Link>
                </div>
                <div className="navButtonItem">
                    <Link to='/about' style={{ textDecoration: 'none', color: '#fff' }}>
                        ABOUT
                    </Link>
                </div>
                <div className="navButtonItem">
                    <Link to='/services' style={{ textDecoration: 'none', color: '#fff' }}>
                        SERVICES
                    </Link>
                </div>
                <div className="navButtonItem">
                    <Link to='/contact' style={{ textDecoration: 'none', color: '#fff' }}>
                        CONTACT
                    </Link>
                </div>
                <div className="navBurgerButton">
                    <button onClick={toggleBurger} className="burgerIcon">
                        {burgerIsActive ? (
                            <FaTimes />
                        ) : (
                            <FaStream />
                        )}
                        
                    </button>
                </div>
            </div>
        </div>
        

        <SideNav burgerIsActive={burgerIsActive} closeMenu={(burgerIsActive) => setBurgerIsActive(burgerIsActive)} />
        
        </>
    )
}

export default Navbar;
