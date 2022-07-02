import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HomeHeader from '../components/HomeHeader';
import Banner from '../components/Banner';
import Contact from '../components/Contact';
import Services from '../components/Services';
import MainContext from '../context/MainContext';


const Home = () => {
    const { setActiveButton } = useContext(MainContext);
    const location = useLocation();

    useEffect(() => {
        if(location.pathname === '/') {
            setActiveButton('home');
        }
    }, [location])

    return (
        <div>
            <HomeHeader />
            <Banner />
            <Contact />
            <Services />
        </div>
    )
}

export default Home;
