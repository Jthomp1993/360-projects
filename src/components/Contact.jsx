import { useContext, useEffect } from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import MainContext from '../context/MainContext';


const StyledContactWrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
`

const StyledContactContent = styled(motion.div)`
    width: 80vw;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #E5E5E5;
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

const Contact = () => {
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
        }
        if(!inView) {
            animation.start({
                x: '100vw'
            })
        }
    }, [inView, animation])

    return (
        <StyledContactWrapper ref={ref}>
            <StyledContactContent
            animate={animation}>
                    <h2>info@360installs.co.uk</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam excepturi quod ipsa, autem ducimus mollitia sequi nulla eligendi, quis similique, distinctio adipisci aut culpa iure necessitatibus illo voluptas at sapiente. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium assumenda tempora eius tenetur, error quis porro velit perferendis sint inventore reprehenderit deleniti adipisci aut at quia recusandae nisi quo dolores?</p>
                    
                    <Link onClick={() => setActiveButton('contact')} className={`btn__primary ${activeButton === 'contact' ? 'active' : ''}`} to='/contact' style={{ textDecoration: 'none'}}>Contact Us</Link>
                      
            </StyledContactContent>
        </StyledContactWrapper>
    )
}

export default Contact
