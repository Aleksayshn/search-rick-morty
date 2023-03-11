import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { GalleryItem } from 'components';
import { List } from './Gallery.styled';

export const Gallery = ({ characters }) => {
  return (
    <List>
      {characters.map(({ id, name, species, image }) => (
        <GalleryItem
          key={nanoid()}
          id={id}
          name={name}
          species={species}
          image={image}
        />
      ))}
    </List>
  );
};

Gallery.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};