import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`  
    * {
        font-family : Noto Sans KR, sans-serif;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        margin: 0 auto;
    }

    #root {
        overflow-y: hidden;
    }

    `;

export default GlobalStyle;
