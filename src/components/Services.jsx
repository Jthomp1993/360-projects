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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.7);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

const StyledContent = styled(motion.div)`
    width: 75%;
    margin: auto;
    justify-content: center;
    text-align: center;
    color: #ffffff;

    h2 {
        font-size: clamp(2.5rem, 5vw, 3.7rem);
        font-weight: 800;
    }

    p {
        font-size: clamp(16px, 5vw, 22px);
        line-height: 1.7;
        margin-bottom: 4rem;
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

    }, [inView])
    
    return (
        <StyledServicesWrapper>
            <StyledLayer ref={ref}>
                <StyledContent
                animate={animation}>
                    <h2>Services</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere at eum molestias cupiditate ab saepe cum quae delectus, iure ipsam quam quidem culpa! Magni illo veniam sed laboriosam corporis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, dolorem, eveniet illum ratione tempora sapiente illo minima nostrum amet provident iure deleniti labore optio. Autem a laudantium nam aperiam natus</p>

                    <Link onClick={() => setActiveButton('services')} className={`btn__pill ${activeButton === 'services' ? 'active' : ''}`} to='/services' style={{ textDecoration: 'none'}}>View Services</Link>
                </StyledContent>
            </StyledLayer>
        </StyledServicesWrapper>
    )
}

export default Services;
