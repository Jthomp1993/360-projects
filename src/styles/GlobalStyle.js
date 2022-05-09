import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }
    body {
        margin: 0;
        padding: 0;
        width: 100%;
        max-width: 100%;
        min-height: 100%;
        background-color: #272725;

    }

    /* Navbar */
    .navWrapper {
        width: 100%;
        height: 100px;
        padding-left: 30px;
        padding-right: 30px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
    }

    .logo h2 {
        font-size: 2rem;
        font-weight: 400;
        color: #ffffff;
    }

    .navButtons {
        display: flex;
        justify-content: flex-end;
    }

    .navButtonItem {
        color: #ffffff;
        font-weight: 400;
        font-size: 1rem;
        padding-right: 1rem;
    }

    .burgerIcon {
        font-size: 1.5rem;
        color: #fff;
        background: #272725;
        border: none;
        cursor: pointer;
        
    }

    .sideNavWrapper {
        position: fixed;
        background-color: #272725;
        width: 100vw;
        height: 100vh;
        right: 0;
        bottom: 0;
        left: 0;
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;

    }

    @media (max-width: 1024px) {
        .navButtonItem {
            display: none;
        }
    }

    @media (min-width: 1023px) {
        .navBurgerButton {
            display: none;
        }
    }



`;

export default GlobalStyle;