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
    }

    /* Navbar */
    .navWrapper {
        height: 100px;
        padding-left: 30px;
        padding-right: 30px;
        background-color: #393e41;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
    }

    .logo h2 {
        font-size: 2rem;
        color: #ffffff;
    }

    .navButtons {
        display: flex;
        justify-content: flex-end;
    }

    .navButtonItem {
        color: #ffffff;
        font-weight: 700;
        font-size: 1rem;
        padding-right: 1rem;
    }


`;

export default GlobalStyle;