import { useContext, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components/macro';
import Header from '../components/Header';
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

const StyledSectionContent = styled(motion.div)`
    text-align: center;

    h2 {
        margin: 0;
        
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
    const { ref, inView } = useInView();
    const animation = useAnimation();

    useEffect(() => {
        if(location.pathname === '/') {
            setActiveButton('home');
        }

        if(inView) {
            animation.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 1, bounce: 0.3
                }
            })
        }
        if(!inView) {
            animation.start({
                x: '100vw'
            })
        }
    }, [location, inView, animation, setActiveButton])

    return (
        <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={{ opacity: 0}}>
            <Header />
            <StyledSectionWrapper>
                <StyledSectionContent>
                    <h2>At 360 we cover all angles.</h2>
                </StyledSectionContent>
            </StyledSectionWrapper>
            <Contact />
            <Banner />
            <Services />
            <StyledSectionWrapper ref={ref}>
                <StyledSectionContent
                animate={animation}>
                    <h2>Find out more about us</h2>
                    <Link className={`btn__dark ${activeButton === 'about' ? 'active' : ''}`} to='/about' style={{ textDecoration: 'none'}}>Read More</Link>
                </StyledSectionContent>
            </StyledSectionWrapper>
        </motion.div>
    )
}

export default Home;
