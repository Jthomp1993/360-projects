import { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
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


const Gallery = () => {
    const location = useLocation();
    const { activeButton, setActiveButton } = useContext(MainContext);

    useEffect(() => {
        if(location.pathname === '/gallery') {
            setActiveButton('gallery');
        }
    }, [location, setActiveButton])

    return (
        <StyledGalleryWrapper>
            {items.map((item, index) => (
                <StyledGalleryItem key={index}>
                    <img className="img" src={require(`../images/gallery/${item.img}`)} alt="360" />
                </StyledGalleryItem>
            ))}
        </StyledGalleryWrapper>
    )
}

export default Gallery;
