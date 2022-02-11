import React from 'react';
import {
  CastList,
  CastItem,
  Thumb,
  ProfileInfo,
  Character,
} from './Cast.styled';
import createImageUrl from '../../helpers/createImageUrl';
import defaultImage from '../../images/no-image.png';

export const Cast = ({ cast }) => {
  const baseImgUrl = createImageUrl();
  return (
    <CastList>
      {cast.length > 0 ? (
        cast.map(({ cast_id, profile_path, character, original_name }) => (
          <CastItem key={cast_id}>
            <div>
              <Thumb>
                <img
                  src={`${
                    profile_path ? `${baseImgUrl}${profile_path}` : defaultImage
                  }`}
                  alt={original_name}
                />
              </Thumb>
            </div>
            <ProfileInfo>
              {character && <Character>as &#34;{character}&#34;</Character>}
              <p>{original_name}</p>
            </ProfileInfo>
          </CastItem>
        ))
      ) : (
        <p>No cast!</p>
      )}
    </CastList>
  );
};
