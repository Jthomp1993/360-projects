import { Routes, Route, useLocation } from 'react-router-dom';
import { Home, About, Services, Gallery, Contact, NotFound } from '../pages';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/services' element={<Services />}></Route>
                <Route path='/gallery' element={<Gallery />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='*' element={<NotFound />}></Route>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes
