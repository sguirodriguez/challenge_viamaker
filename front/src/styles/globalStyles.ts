import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
 } 

  html,body {
    margin: 0;
    padding: 0;
    font-family: 'Aeonik Regular', sans-Serif;
    font-weight: 400;
    background-color: white !important;
    width: 100%;
    max-width: 100%;
  }
  
  p {
    font-family: 'Aeonik Regular', sans-serif;
  }

  a {
    color: inherit !important;
    text-decoration: none !important;
    cursor: pointer;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  &::-webkit-scrollbar {
  width: 8px !important; 
}

&::-webkit-scrollbar-thumb {
  background-color: #888 !important; 
  border-radius: 6px !important; 
}

&::-webkit-scrollbar-track {
  background-color: #f1f1f1 !important; 
}
`;

export default GlobalStyle;
