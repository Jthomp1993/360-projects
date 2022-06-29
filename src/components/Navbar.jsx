import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaStream, FaTimes } from 'react-icons/fa';
import { motion, useViewportScroll } from 'framer-motion';
import SideNav from './SideNav';
import MainContext from '../context/MainContext';

const Navbar = () => {
    const [burgerIsActive, setBurgerIsActive] = useState(false);
    const [hidden, setHidden] = useState(false);
    const { activeButton, setActiveButton } = useContext(MainContext);
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

    return (
        <>
            <motion.div className="navWrapper"
            variants={variants}
            animate={hidden ? "hidden" : "visible"}
            transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}>
            <div className="logo">
                <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
                <img className="nav__brand" src={require("../images/brand.png")} alt="360" />

                </Link>
            </div>
            <div className="navButtons">
                <div className="navButtonItem">
                    <Link to='/' style={{ textDecoration: 'none', color: '#fff' }}
                    onClick={() => setActiveButton('home')} className={activeButton === 'home' ? 'active' : ''}>
                        HOME
                    </Link>
                </div>
                <div className="navButtonItem">
                    <Link to='/about' style={{ textDecoration: 'none', color: '#fff' }}
                    onClick={() => setActiveButton('about')} className={activeButton === 'about' ? 'active' : ''}>
                        ABOUT
                    </Link>
                </div>
                <div className="navButtonItem">
                    <Link to='/services' style={{ textDecoration: 'none', color: '#fff' }}
                    onClick={() => setActiveButton('services')} className={activeButton === 'services' ? 'active' : ''}>
                        SERVICES
                    </Link>
                </div>
                <div className="navButtonItem">
                    <Link to='/contact' style={{ textDecoration: 'none', color: '#fff' }}
                    onClick={() => setActiveButton('contact')} className={activeButton === 'contact' ? 'active' : ''}>
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
        </motion.div>
        

        <SideNav burgerIsActive={burgerIsActive} closeMenu={(burgerIsActive) => setBurgerIsActive(burgerIsActive)} />
        </>
    )
}

export default Navbar;
