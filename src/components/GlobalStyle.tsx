import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html,body {
        margin : 0; 
    }

    html, body, div#root {
        height :100%;
    }
`;

export default GlobalStyle;
