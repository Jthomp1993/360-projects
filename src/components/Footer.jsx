import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

const StyledFlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 50vh;
    padding-top: 2rem;
    padding-bottom: 1rem;
    color: #fff;

    .item {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .footer__brand {
        width: 230px;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: #ffffff;
    }

    p {
        margin-right: 5px
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
        <StyledFlexContainer>
            <div className="item">
            <img className="footer__brand" src={require("../images/logo.png")} alt="360" />
            </div>
            <div className="item">
            <button onClick={scrollToTop} className={`btn__reverse`} style={{ textDecoration: 'none'}}>Back to top</button>
            </div>
            <div className="item">
            <p>Built by <a href="https://github.com/Jthomp1993" target="_blank" rel="noreferrer" ><strong>joshuageorge_coding</strong></a></p>{' '} <FaGithub />
            </div>
        </StyledFlexContainer>
    )
}

export default Footer;
