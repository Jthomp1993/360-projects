import { useContext } from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import MainContext from '../context/MainContext';


const StyledMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    h2 {
        font-size: 2rem;
        font-weight: 400;
        color: #fff;
        text-decoration: none;
    }

    .closeButton {
        font-size: 30px;
        color: #fff;
    }
`

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    padding-left: 30px;
    padding-right: 30px;
    height: 120px;
    color: #fff;
    top: 0;
    right: 0;
    left: 0;

    h2 {
        font-size: 2rem;
        font-weight: 400;
        color: #fff;
    }

`

const SideNav = ({ burgerIsActive }, props) => {
    const { setBurgerIsActive, activeButton } = useContext(MainContext);

    return (
        <AnimatePresence>
            {burgerIsActive && (
                <motion.aside className="sideNavWrapper"
                initial={{ x: '100vw' }}
                animate={{ x: '0' }}
                transition={{ duration: 0.5 }}
                exit={{ x: '100vw' }}
                >
                    <StyledMenu>
                        <Link to='/about' style={{ textDecoration: 'none', color: '#fff' }} onClick={() => props.closeMenu(false)}>
                            <h2 className={activeButton === 'about' ? 'active' : ''}>ABOUT</h2>
                        </Link>
                        <Link to='/services' style={{ textDecoration: 'none', color: '#fff' }} onClick={() => props.closeMenu(false)}>
                            <h2 className={activeButton === 'services' ? 'active' : ''}>SERVICES</h2>
                        </Link>
                        <Link to='/gallery' style={{ textDecoration: 'none', color: '#fff' }} onClick={() => props.closeMenu(false)}>
                            <h2 className={activeButton === 'gallery' ? 'active' : ''}>GALLERY</h2>
                        </Link>
                        <Link to='/contact' style={{ textDecoration: 'none', color: '#fff' }} onClick={() => props.closeMenu(false)}>
                            <h2 className={activeButton === 'contact' ? 'active' : ''}>CONTACT</h2>
                        </Link>
                    </StyledMenu>
                </motion.aside>
            )}
        </AnimatePresence>
    )
}

export default SideNav;
