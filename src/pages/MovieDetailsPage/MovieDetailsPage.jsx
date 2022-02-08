import { useState, useEffect } from 'react';
import {
  Link,
  Outlet,
  Route,
  Routes,
  useParams,
  useLocation,
} from 'react-router-dom';
import * as movieApi from '../../services/movieApi';
import {
  MovieOverview,
  MovieAdditionalInfo,
  AdditionalInfoLayout,
  Cast,
  Reviews,
} from 'components';

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovieById() {
      const response = await movieApi.getMovieDetails(movieId);
      const data = response.data;
      setMovie(data);
    }
    fetchMovieById();
  }, [movieId]);

  return (
    <div>
      {movie && (
        <>
          <button type="button">
            <Link to={location?.state?.from ?? `/`}>Go back</Link>
          </button>
          <MovieOverview info={movie} />
          <MovieAdditionalInfo reviews={movie.reviews} />

          <Routes>
            <Route path="cast" element={<Cast cast={movie.credits.cast} />} />
            <Route
              path="reviews"
              element={<Reviews reviews={movie.reviews} />}
            />
          </Routes>
          <AdditionalInfoLayout>
            <Outlet />
          </AdditionalInfoLayout>
        </>
      )}
    </div>
  );
};
