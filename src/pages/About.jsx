import { useEffect, useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from "styled-components";
import MainContext from '../context/MainContext';

const StyledHeroWrapper = styled.div`
    margin: auto;
    margin-top: 2rem;
    z-index: -1;
    color: #ffffff;

    @media screen and (min-width: 320px) {
            width: calc(90vw + 5 * ((100vw - 320px) / 680)); 
            
    }

    @media screen and (min-width: 1000px) {
        width: 95vw;
        
    }
`

const StyledContent = styled.div`
    margin: auto;
    margin-top: 2rem;
    z-index: -1;
    color: #ffffff;

    h2 {
        font-size: clamp(2.5rem, 5vw, 3.7rem);
    }

    p {
        line-height: 1.7;
        width: 60vw;
    }

    @media screen and (max-width: 820px) {
        p {
            width: 100%;
        }
    }

    @media screen and (min-width: 320px) {
            width: calc(90vw + 5 * ((100vw - 320px) / 680)); 
            
            p {
                font-size: calc(16px + 8 * ((100vw - 320px) / 680));
            }
    }

    @media screen and (min-width: 1000px) {
        width: 95vw;
        
        p {
            font-size: 24px;
        }
    }
`

const StyledSectionWrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 50vh;
    background-color: #F0EBD8;
    margin-top: 6rem;
`

const StyledSectionContent = styled(motion.div)`
    text-align: center;

    h2 {
        margin-top: 0;
        padding-
    }


    @media screen and (min-width: 320px) {       
        h2 {
            font-size: calc(32px + 50 * ((100vw - 320px) / 680));
        }
    }

    @media screen and (min-width: 1000px) {
        
        h2 {
            font-size: 3rem;
        }
    }
`

const About = () => {
    const location = useLocation();
    const { activeButton, setActiveButton } = useContext(MainContext);

    const { ref, inView } = useInView();
    const animation = useAnimation();

    useEffect(() => {
        if(location.pathname === '/about') {
            setActiveButton('about');
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
        <StyledHeroWrapper>
        <img className="hero__image" src={require("../images/about__hero.jpg")} alt="360" />
        </StyledHeroWrapper>
        <StyledContent>
            <div>
            <h2>About us</h2>
            <p>Bespoke Signage and Graphic Company providing services from initial design through to installation and maintenance. With a wealth of professional experience lasting over a decade, we pride ourselves on variation and high finish. Transforming commercial spaces in order to grow businesses and improve functionality is what we do best and we’re always striving for excellence.</p>
            <p>The home of our business lies in London but there is no limit to where our work will take us. Having worked in the signage industry for almost 20 years, we really do have a great deal of expertise and knowledge to impart. We have been lucky enough to work on projects at some of London’s most iconic buildings and attractions and have helped new independent businesses to take their first steps to building a distinguished brand. No job is too big or too small. Whatever signage you require, we can help you. </p>
            <p>At 360 we really do cover all angles. </p>
            </div>
        </StyledContent>
        <StyledSectionWrapper ref={ref}>
            <StyledSectionContent
            animate={animation}>
            <h2>Let's work together.</h2>
            <Link className={`btn__dark ${activeButton === 'contact' ? 'active' : ''}`} to='/contact' style={{ textDecoration: 'none'}}>Contact Us</Link>
            </StyledSectionContent>
        </StyledSectionWrapper>
        </motion.div>
    )
}

export default About;
