import { createContext, useState } from 'react';

const MainContext = createContext();

export const MainProvider = ( { children } ) => {
    const [burgerIsActive, setBurgerIsActive] = useState(false);
    const [activeButton, setActiveButton] = useState('home');


    return <MainContext.Provider value={{
        burgerIsActive,
        activeButton,
        setActiveButton,
        setBurgerIsActive
    }}>
        { children }
    </MainContext.Provider>
}

export default MainContext;