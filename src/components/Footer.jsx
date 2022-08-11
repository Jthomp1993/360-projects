import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';


const StyledFooterWrapper = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledFooterContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #ffffff;
    margin-top: 3rem;
    margin-bottom: 3rem;

    h2 {
        font-size: 30px;
        font-weight: 200;
        margin-top: 0px;
    }

    p {
        font-size: 16px;
    }

    button {
        cursor: pointer;
        border: none;
        margin-bottom: 2rem;
    }

    a {
        text-decoration: none;
        color: #ffffff;
    }

    @media screen and (min-width: 320px) {
        h2 {
            font-size: calc(30px + 18 * ((100vw - 320px) / 680));
        }
    }

    @media screen and (min-width: 1000px) {
        h2 {
            font-size: 2.5rem;
        }
    }
`

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <StyledFooterWrapper>
            <StyledFooterContent>
            <img className="footer__brand" src={require("../images/logo.png")} alt="360" />
                <button onClick={scrollToTop} className={`btn__primary`} style={{ textDecoration: 'none'}}>Back to top</button>
                    <p>Built by <a href="https://github.com/Jthomp1993" target="_blank" rel="noreferrer" ><strong>joshuageorge_coding</strong> <FaGithub /></a></p>
            </StyledFooterContent>
        </StyledFooterWrapper>
    )
}

export default Footer
