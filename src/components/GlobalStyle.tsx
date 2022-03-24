import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`  
    * {
        font-family : Noto Sans KR, sans-serif;
    }
    html,body {
        margin : 0; 
    }

    html, body, #root {
        height :100%;
    }
`;

export default GlobalStyle;
