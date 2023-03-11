import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { About, Item, Title, Specie } from './GalleryItem.styled';
import { Link } from 'react-router-dom';

export const GalleryItem = ({ id, name, species, image }) => {
  const location = useLocation();
  return (
    <Item>
      <Link to={`character/${id}`} state={{ from: location }}>
        <img src={image} alt={name} />
        <About>
          <Title>{name || 'Unknown'}</Title>
          <Specie>{species}</Specie></About>
      </Link>
    </Item>
  );
};

GalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  species: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
