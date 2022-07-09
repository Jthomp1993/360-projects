import { useContext } from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import MainContext from '../context/MainContext';


const StyledMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

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
    const { setBurgerIsActive } = useContext(MainContext);

    return (
        <>
            {burgerIsActive && (
                <aside className="sideNavWrapper">
                    <StyledMenu>
                    <StyledHeader>
                        <img className="nav__brand" src={require("../images/brand.png")} alt="360" />
                        <Link to='/' className="closeButton" onClick={() => props.closeMenu(false)}>
                            <FaTimes />
                        </Link>
                    </StyledHeader>
                        <Link to='/' style={{ textDecoration: 'none', color: '#fff' }} onClick={() => props.closeMenu(false)}>
                            <h2 className="linkItem">HOME</h2>
                        </Link>
                        <Link to='/about' style={{ textDecoration: 'none', color: '#fff' }} onClick={() => props.closeMenu(false)}>
                            <h2>ABOUT</h2>
                        </Link>
                        <Link to='/services' style={{ textDecoration: 'none', color: '#fff' }} onClick={() => props.closeMenu(false)}>
                            <h2>SERVICES</h2>
                        </Link>
                        <Link to='/contact' style={{ textDecoration: 'none', color: '#fff' }} onClick={() => props.closeMenu(false)}>
                            <h2>CONTACT</h2>
                        </Link>
                    </StyledMenu>
                </aside>
            )}
        </>
    )
}

export default SideNav;
