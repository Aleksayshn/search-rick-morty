import picture from '../../utils/logo.png';
import { Link } from 'react-router-dom';
import s from './Header.module.css'
import { Container } from 'components';

export const Header = () => {
  return (

    <Container>
      <Link to={'/'}>
        <img className={s.Img} src={picture} alt="logo"></img>
      </Link>
      <ul className={s.navlist}>
        <li className={s.navitem}>
          <button className={s.navitem__login} type="button">
            Login
          </button>
        </li>
        <li className={s.navitem}>
          <button className={s.navitem__logout} type="submit">Logout
          </button>
        </li>
      </ul>
    </Container>


  );
};

