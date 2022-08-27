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
    padding: 10px;
    height: 100vh;
`

const StyledContactContent = styled(motion.div)`
    width: 75vw;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #FFF;
    
    
    

    h2 {
        font-size: 30px;
        font-family: 'maison__bold';
        margin: 0px;
        text-decoration: underline;
        text-underline-offset: 10px;
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

const Contact = () => {
    const { activeButton, setActiveButton } = useContext(MainContext);
    const { setSnackbar } = useContext(MainContext);

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

    const clickToCopy = async () => {
        const content = document.getElementById('copy').textContent;
        await navigator.clipboard.writeText(content);
        setSnackbar(true, 'success', 'Copied to clipboard.');
    }

    return (
        <StyledContactWrapper ref={ref}>
            <StyledContactContent
            animate={animation}>
                    <div onClick={clickToCopy}>
                        <h2 id="copy">info@360installs.co.uk</h2>
                    </div>
                    <p>Looking to smarten up or rebrand your business? Perhaps your shopfront needs a new look or people need a clearer idea of the way to go? If you’d like to know more about what we can offer or are interested in receiving a quote then please do not hesitate to get in touch. We’d be more than happy to help.  </p>
                    
                    <Link onClick={() => setActiveButton('contact')} className={`btn__primary ${activeButton === 'contact' ? 'active' : ''}`} to='/contact' style={{ textDecoration: 'none'}}>Contact Us</Link>
                      
            </StyledContactContent>
        </StyledContactWrapper>
    )
}

export default Contact
