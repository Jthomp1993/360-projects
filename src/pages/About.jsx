import styled from "styled-components";

const StyledHeroWrapper = styled.div`
    margin: auto;
    margin-top: 3rem;
    margin-bottom: 3rem;
    z-index: -1;

    @media screen and (min-width: 320px) {
            width: calc(90vw + 5 * ((100vw - 320px) / 680));   
    }

    @media screen and (min-width: 1000px) {
        width: 95vw;    
    }
`

const About = () => {
    return (
        <>
        <StyledHeroWrapper>
        <img className="hero__image" src={require("../images/about__hero.jpg")} alt="360" />

        </StyledHeroWrapper>
        </>
    )
}

export default About;
