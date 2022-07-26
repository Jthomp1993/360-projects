import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useViewportScroll } from 'framer-motion';
import SideNav from './SideNav';
import HamburgerButton from './HamburgerButton';
import MainContext from '../context/MainContext';

const Navbar = () => {
    const [burgerIsActive, setBurgerIsActive] = useState(false);
    const [hidden, setHidden] = useState(false);
    const { activeButton, setActiveButton, open, setIsOpen } = useContext(MainContext);
    const { scrollY } = useViewportScroll();

    useEffect(() => {
        return scrollY.onChange(() => update());
    })

    const update = () => {
        if (scrollY?.current < scrollY?.prev) {
            setHidden(false);
          } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
            setHidden(true);
        }
    }

    const variants = {
        /** this is the "visible" key and it's respective style object **/
        visible: { opacity: 1, y: 0 },
        /** this is the "hidden" key and it's respective style object **/
        hidden: { opacity: 0, y: -25 }
    };

    const toggleBurger = () => {
        setBurgerIsActive(!burgerIsActive);
    }

    if(burgerIsActive) {
        document.body.classList.add('bgScroll');
    } else {
        document.body.classList.remove('bgScroll');
    }

    const closeSideNav = () => {
        setBurgerIsActive(false);
        setIsOpen(false);
    }

    return (
        <>
            <motion.div className="navWrapper"
            variants={variants}
            animate={hidden ? "hidden" : "visible"}
            transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}>
            <div className="logo">
                <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}
                onClick={closeSideNav} className={activeButton === 'home' ? '' : ''}>
                <img className="nav__brand" src={require("../images/brand.png")} alt="360" />

                </Link>
            </div>
            <div className="navButtons">
                <div className="navButtonItem">
                    <Link to='/about' style={{ textDecoration: 'none', color: '#fff' }}
                    className={activeButton === 'about' ? 'active' : ''}>
                        About
                    </Link>
                </div>
                <div className="navButtonItem">
                    <Link to='/services' style={{ textDecoration: 'none', color: '#fff' }}
                    className={activeButton === 'services' ? 'active' : ''}>
                        Services
                    </Link>
                </div>
                <div className="navButtonItem">
                    <Link to='/gallery' style={{ textDecoration: 'none', color: '#fff' }}
                    className={activeButton === 'gallery' ? 'active' : ''}>
                        Gallery
                    </Link>
                </div>
                <div className="navButtonItem">
                    <Link to='/contact' style={{ textDecoration: 'none', color: '#fff' }}
                    className={activeButton === 'contact' ? 'active' : ''}>
                        Contact
                    </Link>
                </div>
                <div className="navBurgerButton">
                    <div onClick={toggleBurger} className="burgerIcon">
                        <HamburgerButton />
                        
                    </div>
                </div>
            </div>
        </motion.div>
        

        <SideNav burgerIsActive={burgerIsActive} closeMenu={(burgerIsActive) => setBurgerIsActive(burgerIsActive)} />
        </>
    )
}

export default Navbar;
