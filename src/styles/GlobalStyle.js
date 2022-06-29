import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        overflow-x: clip;
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
        background-color: #000;
        overflow-x: clip;

    }

    .bgScroll {
        position: fixed;
    }

    /* Navbar */
    .navWrapper {
        width: 100%;
        height: 100px;
        padding-left: 25px;
        padding-right: 25px;
        margin: auto;
        background-color: #000;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        position: sticky;
        top: 0px;
        z-index: 999999999999999;

        @media screen and (min-width: 1000px) {
            padding-left: 30px;
            padding-right: 30px;
        }
    }

    .nav__brand {
        width: 175px;
    }

    .navButtons {
        display: flex;
        justify-content: flex-end;
    }

    .navButtonItem {
        color: #ffffff;
        font-weight: 400;
        font-size: 1rem;
        padding-left: 1rem;
    }

    .active {
        border-bottom: 2px solid #ffffff;
        padding-bottom: 5px;
    }

    .burgerIcon {
        font-size: 1.5rem;
        color: #fff;
        background: #000000;
        border: none;
        cursor: pointer;
        
    }

    .sideNavWrapper {
        position: fixed;
        background-color: #000000;
        width: 100vw;
        height: 100vh;
        right: 0;
        bottom: 0;
        left: 0;
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        z-index: 9999999999999;

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

    .btn__pill {
        color: #000;
        background-color: #FFF;
        border-radius: 50px;
        padding: 20px;
        font-size: 1rem;
    }

    .btn__primary {
        color: #000;
        background-color: #fff;
        border-radius: 5px;
        padding: 1rem;
        font-size: 1rem;
        display: inline-block;
    }

    .btn__primary:hover {
        background-color: #C9C9C9;
    }

    .btn__pill:hover {
        background-color: #C9C9C9;
    }

    .btn:hover {
        background-color: #353535;
    }

    .banner__image {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .hero__image {
        width: 100%;
        
    }

    .footer__brand {
        width: 250px;
        margin-bottom: 2rem;
    }

`;

export default GlobalStyle;