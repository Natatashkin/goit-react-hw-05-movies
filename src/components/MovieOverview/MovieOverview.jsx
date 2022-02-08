import React from 'react';
import createImageUrl from '../../helpers/createImageUrl';
import defaultImage from '../../images/no-image.png';
import {
  MovieOverviewWrapper,
  Thumb,
  MovieInfo,
  GenresList,
  GenresListItem,
} from './MovieOverview.styled';

export const MovieOverview = ({ info }) => {
  const { poster_path, title, vote_average, overview, genres } = info;
  const baseImgUrl = createImageUrl();
  return (
    <MovieOverviewWrapper>
      <div>
        <Thumb>
          <img
            src={`${
              poster_path ? `${baseImgUrl}${poster_path}` : defaultImage
            }`}
            alt={`Poster ${title}`}
          />
        </Thumb>
      </div>
      <MovieInfo>
        <h2>{title}</h2>
        <p>
          User score: <span>{`${vote_average * 10}%`}</span>
        </p>
        {overview && (
          <>
            <h3>Overview</h3>
            <p>{overview}</p>
          </>
        )}

        {genres && genres.length > 0 && (
          <>
            <h4>Genres</h4>
            <GenresList>
              {genres.map(genre => (
                <GenresListItem key={genre.id}>{genre.name}</GenresListItem>
              ))}
            </GenresList>
          </>
        )}
      </MovieInfo>
    </MovieOverviewWrapper>
  );
};
