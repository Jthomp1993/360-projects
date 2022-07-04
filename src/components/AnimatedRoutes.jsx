import { Routes, Route, useLocation } from 'react-router-dom';
import { Home, About, Services, Contact } from '../pages';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/services' element={<Services />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes
