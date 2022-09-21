import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components/macro';
import MainContext from '../context/MainContext';

const StyledServicesWrapper = styled.section`
    height: 100vh;
    
`

const StyledLayer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 10px;
`

const StyledContent = styled(motion.div)`
    width: 75vw;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    text-align: center;
    margin-top: 10rem;
    margin-bottom: 10rem;

    h2 {
        font-size: 30px;
        font-weight: 800;
        margin: 0px;
    }

    p {
        font-size: 16px;
        line-height: 1.7;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    @media screen and (min-width: 320px) {
        h2 {
            font-size: calc(30px + 18 * ((100vw - 320px) / 680));
        }
        p {
            font-size: calc(18px + 4 * ((100vw - 320px) / 680));
        }
    }

    @media screen and (min-width: 1000px) {
        h2 {
            font-size: 3.5rem;
        }
        p {
            font-size: 22px;
        }
    }

    @media (max-width: 820px) {
        width: 100%
  
    }

`

const Services = () => {
    const { activeButton, setActiveButton } = useContext(MainContext);
    const { ref, inView } = useInView();
    const animation = useAnimation();

    useEffect(() => {
        if(inView) {
            animation.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 1, bounce: 0.3
                }
            })
        } else {
            animation.start({
                x: '-100vw'
            })
        }

    }, [inView, animation])
    
    return (
        <StyledServicesWrapper>
            <StyledLayer ref={ref}>
                <StyledContent
                animate={animation}>
                    <h2>Services</h2>
                    <p>Our name says it all. When it comes to signage, we can offer a whole spectrum of services. From vinyls and graphics to illuminated fascia’s, we can provide high quality products and service. Helping you to maintain and update your look thereafter is an important part of what we do.</p>

                    <Link onClick={() => setActiveButton('services')} className={`btn__primary ${activeButton === 'services' ? 'active' : ''}`} to='/services' style={{ textDecoration: 'none'}}>View Services</Link>
                </StyledContent>
            </StyledLayer>
        </StyledServicesWrapper>
        
    )
}

export default Services;
