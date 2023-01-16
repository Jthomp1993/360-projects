import { motion } from 'framer-motion';
import styled from 'styled-components/macro';
import img from '../images/services__background.jpg';

const StyledServicesWrapper = styled.section`
    height: 100vh;
    background-image: url(${img});
    background-size: cover;
`

const StyledLayer = styled.div`
    background-color: rgba(0, 0, 0, 0.8);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
`

const StyledContent = styled(motion.div)`
    width: 90vw;
    padding: 20px;
    color: #FFFFFF;

    h1 {
        font-family: 'maison__light';
        width: 75%;
        line-height: 1.25;
    } 

    @media screen and (min-width: 320px) {

        h1 {
            font-size: calc(32px + 15 * ((100vw - 320px) / 680));
        }
    }

    @media screen and (max-width: 820px) {
        width: 90vw;

        h1 {
            width: 100%;
        }
    }

`

const Header = () => {
    
    return (
        <StyledServicesWrapper>
            <StyledLayer>
                <StyledContent
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1, x: [0, 100, 0] }}
                transition={{ duration: 1}}>
                    <h1>
                        London based bespoke signage and graphic company providing services from initial design through to installation and maintenance.
                    </h1>
                </StyledContent>
            </StyledLayer>
        </StyledServicesWrapper>
        
    )
}

export default Header;