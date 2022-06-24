import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *,*::before,*::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root {
    --background: #299900;
    --main-dark: #333;
    --shadow: 0 0 5px rgba(0,0,0,.6);
    --main-gradient: linear-gradient(90deg, rgba(255,40,0,1) 0%, rgba(255,216,0,1) 100%);
  }

  html {
    font-family: 'Montserrat', sans-serif;
    font-size: 62.5%;
  }
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    background: var(--background);
    color: var(--main-dark);
    padding-top: 75px;
  }
`