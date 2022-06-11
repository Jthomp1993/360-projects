import { useContext } from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import MainContext from '../context/MainContext';

const StyledContactWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const StyledContactContent = styled.div`
    width: 75%;
    margin-auto;
    padding: 20px;
    color: #FFFFFF;
    justify-content: center;
    text-align: center;
    margin-top: 5rem;
    margin-bottom: 5rem;

    h2 {
        font-size: clamp(2rem, 5vw, 3rem);
        font-weight: 800;
    }

    p {
        font-size: clamp(16px, 5vw, 22px);
        line-height: 1.7;
        margin-bottom: 4rem;
    }

    @media (max-width: 820px) {
        width: 100%

        
    }

`

const Contact = ( props ) => {
    const { activeButton, setActiveButton } = useContext(MainContext);

    return (
        <StyledContactWrapper>
            <StyledContactContent>
                <h2>info@360installs.co.uk</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam excepturi quod ipsa, autem ducimus mollitia sequi nulla eligendi, quis similique, distinctio adipisci aut culpa iure necessitatibus illo voluptas at sapiente.</p>
                
                <Link onClick={() => setActiveButton('contact')} className={`btn__pill ${activeButton === 'contact' ? 'active' : ''}`} to='/contact' style={{ textDecoration: 'none'}}>Contact Us</Link>
            </StyledContactContent>
        </StyledContactWrapper>
    )
}

export default Contact
