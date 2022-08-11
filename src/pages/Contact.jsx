import { useEffect, useContext, useState, useRef } from "react";
import { useLocation } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from "styled-components";
import emailjs from '@emailjs/browser';
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
    row-gap: 2rem;

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
        p.details {
            font-size: calc(16px + 5 * ((100vw - 320px) / 680));
        }
    }
`

const StyledSectionWrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 50vh;
    background-color: #F0EBD8;
    margin-top: 6rem;
`

const StyledSectionContent = styled(motion.div)`
    text-align: center;

    h2 {
        margin-top: 0;
    }


    @media screen and (min-width: 320px) {       
            h2 {
                font-size: calc(32px + 8 * ((100vw - 320px) / 680));
            }
    }

    @media screen and (min-width: 1000px) {
        
        h2 {
            font-size: 3rem;
        }
    }
`

const Contact = () => {
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const [nameHelper, setNameHelper] = useState('');
    const [emailHelper, setEmailHelper] = useState('');
    const [messageHelper, setMessageHelper] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const form = useRef();

    const { setActiveButton } = useContext(MainContext);
    const { setSnackbar } = useContext(MainContext);
    const location = useLocation();
    const animation = useAnimation();
    const { ref, inView } = useInView();


    useEffect(() => {
        if(location.pathname === '/contact') {
            setActiveButton('contact');
        }
    }, [location, setActiveButton])

    useEffect(() => {
        if(inView) {
            animation.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 1, bounce: 0.3
                }
            })
        }
        if(!inView) {
            animation.start({
                x: '100vw'
            })
        }
    }, [location, inView, animation])

    // Get values from form
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }))

    }
    
    // Validate and submit form
    const sendEmail = (e) => {
        e.preventDefault();

        // Check full name is valid
        var nameRe = /^[a-zA-Z ]{1,}$/;
        var testName = nameRe.test(formData.name);
        if(testName === false) {
            setNameError(true);
            setNameHelper('Please enter your name.');
        } else {
            setNameError(false);
            setNameHelper('');
        }

        // Check email is valid
        var emailRe = /\S+@\S+\.\S+/;
        var testEmail = emailRe.test(formData.email);
        if(testEmail === false) {
            setEmailError(true);
            setEmailHelper('Please enter a valid email.');
        } else {
            setEmailError(false);
            setEmailHelper('');
        }

        // Check message is valid
        var messageRe = /^[a-zA-Z ]{1,}$/;
        var testMessage = messageRe.test(formData.message);
        if(testMessage === false) {
            setMessageError(true);
            setMessageHelper('Please enter a message.');
        } else {
            setMessageError(false);
            setMessageHelper('');
        }

        if(testName && testEmail && testMessage) {    
            emailjs.sendForm('service_d1uv7ik', 'template_bj8mn7a', form.current, 'LOrfm3SwKaxFqONJV')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            setSnackbar(true, 'success', 'Your message has been sent.');
            e.target.reset();
        
        } else {
            setSnackbar(true, 'error', "Please fill out the form correctly.");
        }
    }

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
                        <p className="details">James Keller Aherne</p>
                        <p className="details">info@360installs.co.uk</p>
                        <p className="details">+44 7795577101</p>
                    </StyledContactContent>
                    <StyledContactContent>
                        <h3>SAY HELLO</h3>
                    <ThemeProvider theme={theme}>
                    <Box
                    onSubmit={sendEmail}
                    ref={form}
                    noValidate
                    component='form' sx={{ width: '100%', }}>

                    <TextField InputLabelProps={{ style: { color: "white", zIndex: '-1', }, }} 
                    InputProps={{ sx: {".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                        border: "2px solid white",
                        backgroundColor: 'none'
                    },
                        "&:hover": {".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                        border: "2px solid white",
                    },
                    },
                    }, 
                    }} sx={{ input: {color: '#fff' }, marginBottom: '1rem'}} 
                    onChange={onChange} fullWidth 
                    error={nameError} helperText={nameHelper} required label="Full name" name='name' id="name" />

                    <TextField InputLabelProps={{ style: { color: "white", zIndex: '-1', }, }} 
                    InputProps={{ sx: {".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                        border: "2px solid white",
                    },
                        "&:hover": {".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                        border: "2px solid white",
                    },
                    },
                    },
                    }} sx={{ input: {color: '#fff' }, marginBottom: '1rem'}} 
                    onChange={onChange} fullWidth 
                    error={emailError} helperText={emailHelper} className='background' required label="Email" name='email' id="email" />

                    <TextField InputLabelProps={{ style: { color: "white", zIndex: '-1' }, }} 
                    InputProps={{ style: {color: '#fff'}, sx: {".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                        border: "2px solid white",
                    },
                        "&:hover": {".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                        border: "2px solid white",
                    },
                    },
                    },
                    }} sx={{ input: {color: '#fff' }, marginBottom: '1rem'}} 
                    onChange={onChange} fullWidth
                    error={messageError} helperText={messageHelper} required multiline rows={4} 
                    label="Message" name='message' id="message" />

                    <button className="btn__primary" style={{ border: 'none', float: 'right'}}>Submit</button>
                    </Box>
                    </ThemeProvider>
                    </StyledContactContent>
                </StyledContentWrapper>
            </StyledContactWrapper>
            <StyledSectionWrapper ref={ref}>
                <StyledSectionContent animate={animation}>
                    <h2>We'll look forward to hearing from you.</h2>
                </StyledSectionContent>
            </StyledSectionWrapper>
        </motion.div>
    )
}

export default Contact;
