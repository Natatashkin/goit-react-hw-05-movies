import React from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import { MoviesGallery, MovieCard, Card } from 'components';
import * as movieApi from '../../services/movieApi';
import toast, { Toaster } from 'react-hot-toast';

export const MoviesPage = () => {
  const inputRef = useRef(null);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams('');
  const searchQuery = searchParams.get('query');
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    setSearchParams({ query: inputRef.current.value });
  }

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    try {
      async function getMoviesByQuery() {
        const response = await movieApi.getSearchMovie(searchQuery, page);
        const data = response.data;
        if (data.total_results === 0) {
          toast.error(`No movies on demand ${searchQuery}!`);
        }
        setMovies(data.results);
      }
      getMoviesByQuery();
    } catch (error) {
      console.log(error);
    }
  }, [searchQuery, page]);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" />
        <button type="submit">submit</button>
      </form>

      {movies && (
        <MoviesGallery>
          {movies.map(item => (
            <Card key={item.id}>
              <Link to={`${item.id}`} state={{ from: location }}>
                <MovieCard details={item} />
              </Link>
            </Card>
          ))}
        </MoviesGallery>
      )}
      <Toaster />
    </>
  );
};
