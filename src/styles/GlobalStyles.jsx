import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  position: relative;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1, h2, h3, h4, h5, h6 {
    margin: 0;
}

ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
}

a {
    text-decoration: none;
    color: inherit;
}

img {
    display: block;
}

p{
  margin: 0;
}
`;

export default GlobalStyle;
