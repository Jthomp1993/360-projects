import { useEffect, useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from "styled-components";
import items from '../data/galleryData';
import MainContext from '../context/MainContext';


const StyledGalleryWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: auto;
    margin-top: 2rem;
    width: 95%;
    gap: 2rem;
    z-index: -1;

    @media (max-width: 770px) {
        grid-template-columns: 1fr;
    }

`

const StyledGalleryItem = styled.div`

    .img {
        width: 100%;
        height: 60vh;
        object-fit: cover;
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


const Gallery = () => {
    const location = useLocation();
    const animation = useAnimation();
    const { ref, inView } = useInView();
    const { activeButton, setActiveButton } = useContext(MainContext);

    useEffect(() => {
        if(location.pathname === '/gallery') {
            setActiveButton('gallery');
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
    }, [location, setActiveButton, animation, inView])

    return (
        <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={{ opacity: 0}}>
        <StyledGalleryWrapper>
            {items.map((item, index) => (
                <StyledGalleryItem key={index}>
                    <img className="img" src={require(`../images/gallery/${item.img}`)} alt="360" />
                </StyledGalleryItem>
            ))}
        </StyledGalleryWrapper>
        <StyledSectionWrapper ref={ref}>
            <StyledSectionContent animate={animation}>
            <h2>Get in touch with us.</h2>
                <Link className={`btn__dark ${activeButton === 'contact' ? 'active' : ''}`} to='/contact' style={{  textDecoration: 'none'}}>Contact Us</Link>
            </StyledSectionContent>
        </StyledSectionWrapper>
        </motion.div>
    )
}

export default Gallery;
