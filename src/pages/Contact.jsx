import { useEffect, useContext } from "react";
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from "styled-components";
import MainContext from '../context/MainContext';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#fff',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});

const StyledContactWrapper = styled.div`
    width: 90%;
    margin: auto;
    margin-top: 2rem;
    color: #FFF;
    z-index: -9999999;

    h2 {
        margin-top: 0;
    }

    @media screen and (min-width: 320px) {
        h2 {
            font-size: calc(32px + 50 * ((100vw - 320px) / 680));
        }
    }
`

const StyledContentWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 4rem;

    @media (max-width: 770px) {
        grid-template-columns: 1fr;
    }

`

const StyledContactContent = styled.div`
    color: #fff;

    @media screen and (min-width: 320px) {
        h3 {
            font-size: calc(18px + 10 * ((100vw - 320px) / 680));
        }
        p {
            font-size: calc(16px + 5 * ((100vw - 320px) / 680));
        }
    }
`

const Contact = () => {
    const { setActiveButton } = useContext(MainContext);
    const location = useLocation();

    useEffect(() => {
        if(location.pathname === '/contact') {
            setActiveButton('contact');
        }
    }, [location, setActiveButton])

    return (
        <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={{ opacity: 0}}>
            <StyledContactWrapper>
                <h2>GET IN TOUCH</h2>
                <StyledContentWrapper>
                    <StyledContactContent>
                        <h3>CONTACT DETAILS</h3>
                        <p>James Keller Aherne</p>
                        <p>info@360installs.co.uk</p>
                        <p>+44 7852739661</p>
                    </StyledContactContent>
                    <StyledContactContent>
                        <h3>SAY HELLO</h3>
                    <ThemeProvider theme={theme}>
                    <Box
                    component='form' sx={{ width: '100%', }}>
                    <TextField InputLabelProps={{ style: { color: "white", zIndex: '-1', }, }} 
                    InputProps={{ sx: {".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                        border: "2px solid white",
                    },
                        "&:hover": {".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                        border: "2px solid white",
                    },
                    },
                    },
                    }} sx={{ input: {color: '#fff' }, marginBottom: '2rem'}} fullWidth label="Full name" id="name" />

                    <TextField InputLabelProps={{ style: { color: "white", zIndex: '-1', }, }} 
                    InputProps={{ sx: {".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                        border: "2px solid white",
                    },
                        "&:hover": {".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                        border: "2px solid white",
                    },
                    },
                    },
                    }} sx={{ input: {color: '#fff' }, marginBottom: '2rem'}} fullWidth label="Email" id="email" />

                    <TextField InputLabelProps={{ style: { color: "white", zIndex: '-1' }, }} 
                    InputProps={{ style: {color: '#fff'}, sx: {".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                        border: "2px solid white",
                    },
                        "&:hover": {".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                        border: "2px solid white",
                    },
                    },
                    },
                    }} sx={{ input: {color: '#fff' }, marginBottom: '2rem'}} fullWidth multiline rows={4} label="Message" id="message" />

                    <button className="btn__primary" style={{ border: 'none', float: 'right'}}>Submit</button>
                    </Box>
                    </ThemeProvider>
                    </StyledContactContent>
                </StyledContentWrapper>
            </StyledContactWrapper>
        </motion.div>
    )
}

export default Contact;
