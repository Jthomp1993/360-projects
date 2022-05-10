import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const StyledHomeHeader = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60%;

`

const StyledHeaderContent = styled.div`
    width: 85%;
    padding: 20px;
    text-align: center;
    color: #fff;

    h1 {
        font-size: clamp(2rem, 5vw, 3rem);
        margin-bottom: 3rem;
    }

    p {
        font-size: clamp(1rem ,3vw, 1.2rem);
        font-weight: 400;
        margin-bottom: 2rem;
    }

    @media (max-width: 820) {
        width: 100%;
    }

    @media (max-width: 520px) {
        width: 100%;
        h1 {
            font-size: 2rem;
        }
    }
`

const HomeHeader = () => {

    return (
        <StyledHomeHeader>
            <StyledHeaderContent>
                <h1>
                    London Based Bespoke Signage & Graphic Installations with over 10 years of professional experience.
                </h1>
                <p>Please feel free to get in touch.</p>
                <Link className='btn' to='/contact' style={{ textDecoration: 'none', color: '#fff' }}>
                    CONTACT US
                </Link>

            </StyledHeaderContent>
        </StyledHomeHeader>
    )
}

export default HomeHeader
