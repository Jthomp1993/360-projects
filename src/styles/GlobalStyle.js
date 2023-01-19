import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        overflow-x: hidden;
        scroll-behaviour: initial;
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
        background-color: #111111;
        overflow-x: hidden;
        position: relative;

        @media (max-width: 320px) {
            word-break: break-all;
        }
    }

    :root {
        --button-width: 30px;
        --button-height: calc(var(--button-width) * .8);
        --rectangle-height: calc(var(--button-width) * .1);
        --rectangle-width: calc(var(--button-width) * .5);
        --translate: calc(var(--button-width) * .17);
        --border-radius: calc(var(--button-width) * .04);
    }

    .bgScroll {
        position: fixed;
    }

    /* Navbar */
    .navWrapper {
        width: 100%;
        height: 120px;
        padding-left: 25px;
        padding-right: 25px;
        margin: auto;
        background-color: #111111;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        position: fixed;
        top: 0px;
        z-index: 999999999999999;

        @media screen and (min-width: 1000px) {
            padding-left: 30px;
            padding-right: 30px;
        }
    }

    .nav__brand {
        width: 130px;
    }

    .navButtons {
        display: flex;
        justify-content: flex-end;
    }

    .navButtonItem {
        color: #ffffff;
        font-weight: 400;
        font-size: 18px;
        padding-left: 2rem;
    }

    .block {
        padding-top: 120px;
    }

    .active {
        border-bottom: 2px solid #ffffff;
        padding-bottom: 5px;
    }

    .burgerIcon {
        font-size: 1.5rem;
        color: #fff;
        background: #1D1D1D;
        border: none;
        cursor: pointer;
        
    }

    .sideNavWrapper {
        position: fixed;
        background-color: #111111;
        width: 100vw;
        height: 100%;
        top: 0;
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        z-index: 1;
        overflow-x: clip;

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
        cursor: pointer;
    }

    .btn__reverse {
        color: #FFF;
        background-color: #1D1D1D;
        border: 1px solid #FFF;
        border-radius: 5px;
        padding: 1rem;
        font-size: 1rem;
        display: inline-block;
        cursor: pointer;
    }

    .btn__reverse:hover {
        background-color: #333333;
    }

    .btn__primary:hover {
        background-color: #C9C9C9;
    }

    .btn__pill:hover {
        background-color: #C9C9C9;
    }

    .btn__dark {
        color: #FFF;
        background-color: #1D1D1D;
        border-radius: 5px;
        padding: 1rem;
        font-size: 1rem;
        display: inline-block;
    }

    .btn__dark:hover {
        background-color: #333333;
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

    .white {
        color: #ffffff;
    }

    .green {
        color: green;
    }

    #copy {
        position: relative;
        cursor: url('../images/cursor.cur'), copy;
    }

    .white.Mui-required {
        color: #fff;
    }

    input:-webkit-autofill {
    color: #FFFFFF !important;
}
`;

export default GlobalStyle;