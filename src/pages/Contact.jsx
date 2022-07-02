import { useEffect, useContext } from "react";
import { useLocation } from 'react-router-dom';
import MainContext from '../context/MainContext';

const Contact = () => {
    const { setActiveButton } = useContext(MainContext);
    const location = useLocation();

    useEffect(() => {
        if(location.pathname === '/contact') {
            setActiveButton('contact');
        }
    }, [location])

    return (
        <div>
            Contact
        </div>
    )
}

export default Contact;
