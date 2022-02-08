import React, { lazy } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import './services/movieApi';
import GlobalStyle from './styles/GlobalStyles';

const HomePage = lazy(() =>
  import('./pages/HomePage/HomePage').then(module => ({
    default: module.HomePage,
  }))
);

const MoviesPage = lazy(() =>
  import('./pages/MoviesPage/MoviesPage').then(module => ({
    default: module.MoviesPage,
  }))
);

const MovieDetailsPage = lazy(() =>
  import('./pages/MovieDetailsPage/MovieDetailsPage').then(module => ({
    default: module.MovieDetailsPage,
  }))
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route
            path="movies/:movieId/*"
            element={<MovieDetailsPage />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);
