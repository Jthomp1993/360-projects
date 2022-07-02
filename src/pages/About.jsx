import { useEffect, useContext } from 'react';
import { useLocation, Link } from 'react-router-dom'
import styled from "styled-components";
import MainContext from '../context/MainContext';


const StyledHeroWrapper = styled.div`
    margin: auto;
    margin-top: 2rem;
    z-index: -1;
    color: #ffffff;

    h2 {
        font-size: clamp(2.5rem, 5vw, 3.7rem);
    }

    p {
        line-height: 1.7;
        
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
            padding: 0 1rem 0 1rem;
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

const About = () => {
    const location = useLocation();
    const { activeButton, setActiveButton } = useContext(MainContext);

    useEffect(() => {
        if(location.pathname === '/about') {
            setActiveButton('about');
        }
    }, [location])
    return (
        <>
        <StyledHeroWrapper>
        <img className="hero__image" src={require("../images/about__hero.jpg")} alt="360" />
        <h2>About us</h2>
        <p>London Based Bespoke Signage & Graphic Installations with over 10 years of professional experience. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae eius doloremque excepturi delectus cupiditate! Nobis cumque pariatur, deleniti quisquam neque, officiis alias repellendus, quae cupiditate excepturi aliquam harum rerum ipsum?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quidem explicabo eius praesentium velit est expedita. Excepturi impedit assumenda quod! Ad aut sit autem quaerat. Sequi blanditiis iste cum beatae? Lorem ipsum dolor sit amet consectetur adipisicing elit. A aperiam quis quam cumque, provident blanditiis aliquam maxime debitis accusantium fuga porro exercitationem officiis natus quisquam non inventore voluptatum reprehenderit animi!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque consequatur odit ea ex impedit repellendus sequi dicta optio amet voluptas. Totam unde odio itaque explicabo excepturi dolorem incidunt perspiciatis cum!</p>
        </StyledHeroWrapper>
        <StyledSectionWrapper>
            <StyledSectionContent>
            <h2>Let's work together.</h2>
            <Link className={`btn__dark ${activeButton === 'contact' ? 'active' : ''}`} to='/contact' style={{ textDecoration: 'none'}}>Contact Us</Link>
            
            </StyledSectionContent>
        </StyledSectionWrapper>
        </>
    )
}

export default About;
