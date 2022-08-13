import styled from "styled-components";
import { Link } from 'react-router-dom';


const StyledFlexContainer = styled.div`
    background-color: #F0EBD8;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 320px) {
        h1 {
            font-size: calc(120px + 72 * ((100vw - 320px) / 680));
            margin: 0;
        }

        p { 
            font-size: calc(18px + 4 * ((100vw - 320px) / 680));
            
        }
    }
`

const StyledFlexItem = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`

const NotFound = () => {
    return (
        <StyledFlexContainer>
            <StyledFlexItem>
                <h1>404</h1>
                <p><strong>Sorry the page you are looking for could not be found.</strong></p>
                <div>
                    <Link className={`btn__dark`} to='/' style={{  textDecoration: 'none'}}>
                        Return to the home page
                    </Link>
                </div>
                
            </StyledFlexItem>
        </StyledFlexContainer>
    )
}

export default NotFound;
