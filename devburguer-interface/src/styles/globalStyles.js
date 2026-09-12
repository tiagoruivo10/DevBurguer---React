import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

const globalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        font-family: ${(props) => props.theme.poppinsFont};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        overflow-x: hidden;
        width: 100%;
    }

    body {
        background-color: ${(props) => props.theme.mainBlack};
        color: ${(props) => props.theme.secondWhite};
        min-height: 100vh;
        width: 100%;
        overflow-x: hidden;
    }

    #root {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        width: 100%;
        overflow-x: hidden;
    }

    ::selection {
        background-color: ${(props) => props.theme.orange};
        color: ${(props) => props.theme.white};
    }

    /* Custom Scrollbar */
    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: ${(props) => props.theme.black};
    }

    ::-webkit-scrollbar-thumb {
        background: ${(props) => props.theme.darkGray};
        border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: ${(props) => props.theme.orange};
    }

    button, a {
        cursor: pointer;
        transition: all 0.2s ease-in-out;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;

export default globalStyles;

