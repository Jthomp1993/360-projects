import { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import MainContext from '../context/MainContext';

const Services = () => {
    const { setActiveButton } = useContext(MainContext);
    const location = useLocation();

    useEffect(() => {
        if(location.pathname === '/services') {
            setActiveButton('services');
        }
    }, [location, setActiveButton])

    return (
        <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={{ opacity: 0}}>
            Services
        </motion.div>
    )
}

export default Services;
