import styled from 'styled-components/macro';
import { motion } from 'framer-motion';

const StyledHeaderWrapper = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 80vh;
`

const StyledHeaderContent = styled.div`
    width: 95vw;
    margin: auto;
    color: #fff;

    h1 {
        margin-top: 7.5rem;
        font-weight: 400;
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

const HomeHeader = () => {

    return (
        <StyledHeaderWrapper>
            <StyledHeaderContent>
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1, x: [0, 100, 0] }}
                    transition={{ duration: 1}}>
                    <h1>
                        London based bespoke signage and graphic company providing services from initial design through to installation and maintenance.
                    </h1>
                </motion.div>
            </StyledHeaderContent>
        </StyledHeaderWrapper>
    )
}

export default HomeHeader
