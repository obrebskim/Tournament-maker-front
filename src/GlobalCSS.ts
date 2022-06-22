import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *,*::before,*::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root {
    --background: #299900;
  }

  html {
    font-family: 'Montserrat', sans-serif;
    font-size: 62,5%;
  }
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    background: var(--background);
    color: white;
  }
`