import { useEffect, useContext } from "react";
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import MainContext from '../context/MainContext';

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
            Contact
        </motion.div>
    )
}

export default Contact;
