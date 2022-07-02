import { useContext, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import HomeHeader from '../components/HomeHeader';
import Banner from '../components/Banner';
import Contact from '../components/Contact';
import Services from '../components/Services';
import MainContext from '../context/MainContext';

const StyledSectionWrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 50vh;
    background-color: #F0EBD8;
`

const StyledSectionContent = styled.div`
    text-align: center;

    h2 {
        margin-top: 0;
        padding-
    }


    @media screen and (min-width: 320px) {       
            h2 {
                font-size: calc(32px + 8 * ((100vw - 320px) / 680));
            }
    }

    @media screen and (min-width: 1000px) {
        
        h2 {
            font-size: 3rem;
        }
    }
`

const Home = () => {
    const { activeButton, setActiveButton } = useContext(MainContext);
    const location = useLocation();

    useEffect(() => {
        if(location.pathname === '/') {
            setActiveButton('home');
        }
    }, [location])

    return (
        <div>
            <HomeHeader />
            <Banner />
            <Contact />
            <Services />
            <StyledSectionWrapper>
                <StyledSectionContent>
                    <h2>Find out more about us</h2>
                    <Link className={`btn__dark ${activeButton === 'about' ? 'active' : ''}`} to='/about' style={{ textDecoration: 'none'}}>Read More</Link>
                </StyledSectionContent>
            </StyledSectionWrapper>
        </div>
    )
}

export default Home;
