import { Container } from 'layout/Footer/Footer.styled';
import PropTypes from 'prop-types';
import { Details, Cicle, Title, Item, InfoWrap } from './Card.styled';

export const Card = ({ card }) => {
  const { name, species, image, gender, status, type } =
    card;
  return (
    <Container>
      <InfoWrap>
        <Cicle><img src={image} alt={name} /></Cicle>
        <Title>{name}</Title>
        <Details>
          <h2>Informations</h2>
          <Item><h3>Gender</h3><p>{gender}</p></Item>
          <Item><h3>Status</h3><p>{status}</p></Item>
          <Item><h3>Specie</h3><p>{species}</p></Item>
          <Item><h3>Origin</h3><p>{card.origin.name}</p></Item>
          <Item><h3>Type</h3><p>{type || 'Unknown'}</p></Item>
        </Details>
      </InfoWrap>
    </Container>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    type: PropTypes.string,
    origin: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
