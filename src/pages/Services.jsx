import { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import MainContext from '../context/MainContext';

const Services = () => {
    const { setActiveButton } = useContext(MainContext);
    const location = useLocation();

    useEffect(() => {
        if(location.pathname === '/services') {
            setActiveButton('services');
        }
    }, [location])

    return (
        <div>
            Services
        </div>
    )
}

export default Services;
