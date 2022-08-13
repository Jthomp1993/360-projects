import { createContext, useState, useReducer } from 'react';
import mainReducer from './MainReducer';

const MainContext = createContext();

export const MainProvider = ( { children } ) => {
    const initialState = null;
    const [burgerIsActive, setBurgerIsActive] = useState(false);
    const [activeButton, setActiveButton] = useState('home');
    const [isOpen, setIsOpen] = useState(false);
    const [state, dispatch] = useReducer(mainReducer, initialState);

    const setSnackbar = (snackbarOpen, type, msg) => {
        dispatch({
            type: 'SET_SNACKBAR',
            payload: {snackbarOpen, type, msg}
        })

        setTimeout(() => dispatch({ type: 'REMOVE_SNACKBAR'}), 5000);
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
    }
    dispatch({ type: 'REMOVE_SNACKBAR'})
    };

    return <MainContext.Provider value={{
        burgerIsActive,
        activeButton,
        isOpen,
        setIsOpen,
        setActiveButton,
        setBurgerIsActive,
        snackbar: state, setSnackbar, handleClose,
    }}>
        { children }
    </MainContext.Provider>
}

export default MainContext;