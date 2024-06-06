import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: "Titillium Web", sans-serif;
    box-sizing: border-box;
    //adicionar plano de fundo no print
    print-color-adjust: exact;
    -webkit-print-color-adjust: exact;

    

    //estilização dá página do print
    @page {
      size: landscape; //tamanho da página
      margin: 0mm; //margem da página

      p {
        widows: 3;
        orphans: 3;
      }
    }
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  html {
    overflow-x: hidden;

  }

  body {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1 {
    margin-bottom: 0;
  }

  .title {
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 600;
    margin-top: 15em;
  }

  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  

  h1, h2, h3, h4 , h5, h6, p{
    font-family: 'Titillium Web', sans-serif;
    font-weight: 600;
  }

  .container__ {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }

  button {
    cursor: pointer;
    transition: .2s ease-in;
  }

  button:hover {
    filter: brightness(.9);
  }

  svg{
    overflow: visible;
  }
`;

export default GlobalStyle;
