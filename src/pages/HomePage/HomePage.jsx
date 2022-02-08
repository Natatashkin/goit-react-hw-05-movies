import React from 'react';
import { useState, useEffect } from 'react';
import * as movieApi from '../../services/movieApi';
import { HomeStyles, Title } from './HomePage.styled';
import { MoviesGallery, MovieCard, Card } from 'components';
import { Link, useLocation } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

export const HomePage = () => {
  const [trends, setTrends] = useState(null);
  const [page, setPage] = useState('1');
  const location = useLocation();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await movieApi.getMoviesTrending('day', page);
        console.log(data);
        setTrends(data.results);
      } catch (error) {
        toast.error(error);
      }
    }
    fetchData();
  }, [page]);
  return (
    <HomeStyles>
      <Title>Daily Trending</Title>
      <Toaster />
      {trends && (
        <MoviesGallery>
          {trends.map(item => (
            <Card key={item.id}>
              <Link to={`movies/${item.id}`} state={{ from: location }}>
                <MovieCard details={item} />
              </Link>
            </Card>
          ))}
        </MoviesGallery>
      )}
    </HomeStyles>
  );
};
