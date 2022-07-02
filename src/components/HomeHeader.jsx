import styled from 'styled-components/macro';
import { motion } from 'framer-motion';

const StyledHeaderWrapper = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 3rem;
`

const StyledHeaderContent = styled.div`
    width: 95%;
    margin: auto;
    padding: 20px;
    color: #fff;

    h1 {
        font-size: clamp(2.5rem, 5vw, 3.7rem);
        margin-top: 7.5rem;
        font-weight: 400;
        width: 75%;
        line-height: 1.25;
    }

    @media (max-width: 820px) {
        h1 {
            width: 100%;
        }
    }

    
`

const HomeHeader = () => {

    return (
        <StyledHeaderWrapper>
            <StyledHeaderContent>
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1, x: [0, 100, 0] }}
                    transition={{ duration: 1}}>
                    <h1>
                        London Based Bespoke Signage & Graphic Installations with over 10 years of professional experience.
                    </h1>
                </motion.div>
            </StyledHeaderContent>
        </StyledHeaderWrapper>
    )
}

export default HomeHeader
