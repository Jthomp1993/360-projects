import styled from 'styled-components/macro';

const StyledBannerWrapper = styled.section`
    padding: 0px;
    background-color: red;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    position: relative;
    z-index: -1;

    @media (max-width: 770px) {
        grid-template-columns: 1fr;
    }

`

const StyledBannerImage = styled.div`
    position: relative;
    max-width: auto;
    &:after {
        content: '';
        display: block;
        padding-top: 100%;
    } 
`

const Banner = () => {
    return (
        <StyledBannerWrapper>
            <StyledBannerImage className="banner__brand">
                <img className="banner__image" src={require("../images/banner__image3.jpg")} alt="360" />
            </StyledBannerImage>
            <StyledBannerImage className="banner__brand">
                <img className="banner__image" src={require("../images/banner__image1.jpg")} alt="360" />
            </StyledBannerImage>
            <StyledBannerImage className="banner__brand">
                <img className="banner__image" src={require("../images/banner__image2.jpg")} alt="360" />
            </StyledBannerImage>
            
        </StyledBannerWrapper>
    )
}

export default Banner
