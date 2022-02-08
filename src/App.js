import { Suspense } from 'react';
import { AppBar } from './App.styled';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigations';
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { Container } from './components';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar>
          <Navigation />
        </AppBar>
        <Suspense fallback="">
          <main>
            <Container>
              <Outlet />
            </Container>
          </main>
        </Suspense>
      </ThemeProvider>
    </>
  );
}

export default App;
