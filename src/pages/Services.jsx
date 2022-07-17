import { useEffect, useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import items from '../data/servicesData';
import MainContext from '../context/MainContext';
import styled from 'styled-components/macro';

const StyledServiceWrapper = styled.div`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 8%;
        justify-content: center;
        width: 90%;
        margin: auto;

        @media (max-width: 770px) {
        grid-template-columns: 1fr;
    }
`

    const StyledServiceItem = styled.div`
        margin-top: 5rem;
        color: #fff;

        .img__wrapper {
            position: relative;
            max-width: auto;
            &:after {
            content: '';
            display: block;
            padding-top: 100%;
    } 
        }

        p {
            line-height: 1.7;
            
        }

        @media screen and (min-width: 320px) {
        h2 {
            font-size: calc(22px + 8 * ((100vw - 320px) / 680));
        }

        p {
            font-size: calc(14px + 2 * ((100vw - 320px) / 680));

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
    

const Services = () => {
    const { activeButton, setActiveButton } = useContext(MainContext);
    const location = useLocation();
    const { ref, inView } = useInView();
    const animation = useAnimation();

    useEffect(() => {
        if(location.pathname === '/services') {
            setActiveButton('services');
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
    }, [location, setActiveButton, inView, animation])

    return (
        <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={{ opacity: 0}}>
        
            <StyledServiceWrapper>
            {items.map((item, index) => (
                <StyledServiceItem key={index}>
                    <div className="img__wrapper">
                        <img className="banner__image" src={require(`../images/${item.img}`)} alt="360" />
                    </div>
                    <h2>{item.title}</h2>
                    <p>{item.info}</p>
                </StyledServiceItem>
            ))}   
            </StyledServiceWrapper>
            <StyledSectionWrapper ref={ref}>
                <StyledSectionContent animate={animation}>
                <h2>Get in touch with us.</h2>
                <Link className={`btn__dark ${activeButton === 'contact' ? 'active' : ''}`} to='/contact' style={{  textDecoration: 'none'}}>Contact Us</Link>
                </StyledSectionContent>
            </StyledSectionWrapper>
        </motion.div>
    )
}

export default Services;
