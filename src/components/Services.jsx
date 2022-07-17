import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components/macro';
import MainContext from '../context/MainContext';
import img from '../images/services__background.jpg';

const StyledServicesWrapper = styled.section`
    height: 100vh;
    background-image: url(${img});
    background-size: cover;
`

const StyledLayer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.7);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

const StyledContent = styled(motion.div)`
    width: 80vw;
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
            font-size: calc(16px + 6 * ((100vw - 320px) / 680));
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
                    <h2>SERVICES</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere at eum molestias cupiditate ab saepe cum quae delectus, iure ipsam quam quidem culpa! Magni illo veniam sed laboriosam corporis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, dolorem, eveniet illum ratione tempora sapiente illo minima nostrum amet provident iure deleniti labore optio. Autem a laudantium nam aperiam natus</p>

                    <Link onClick={() => setActiveButton('services')} className={`btn__primary ${activeButton === 'services' ? 'active' : ''}`} to='/services' style={{ textDecoration: 'none'}}>View Services</Link>
                </StyledContent>
            </StyledLayer>
        </StyledServicesWrapper>
        
    )
}

export default Services;
