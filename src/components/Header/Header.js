import styled from 'styled-components';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import bg from '../../bg.jpg';
import { logout } from '../../services/Auth';
import { useUserAuth } from '../../context/UserAuthContext';

export const Header = () => {
  const { user } = useUserAuth();
  const navigate = useNavigate();

  const onLogout = (e) => {
    e.preventDefault();
    logout();
    navigate('/');
  };

  return (
    <NavWrapper>
      <Link className="logo" to="/">
        <Logo>recipeLand</Logo>
      </Link>
      <NavBtns>
        <NavLink className="btn" to="/">
          Catalog
        </NavLink>
        {user ? (
          <>
            <NavLink className="btn" to="my-recipies">
              My recipies
            </NavLink>
            <NavLink className="btn" to="create">
              Create recipe
            </NavLink>
            <button className="btn" onClick={onLogout}>
              <i className="fas fa-sign-out-alt"></i>
            </button>
          </>
        ) : (
          <>
            <NavLink className="btn" to="login">
              <i className="fas fa-sign-in-alt"></i>
            </NavLink>
            <NavLink className="btn" to="register">
              <i className="fas fa-user-plus"></i>
            </NavLink>
          </>
        )}
      </NavBtns>
    </NavWrapper>
  );
};

const NavWrapper = styled.header`
  animation: 300ms slideDown cubic-bezier(0.785, 0.135, 0.15, 0.86);
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 25px;
  padding: 15px 40px;
  background: linear-gradient(
    90deg,
    rgba(16, 16, 16, 0.99) 0%,
    rgba(30, 30, 30, 0.99) 50%,
    rgba(16, 16, 16, 0.99) 100%
  );
  /* background-image: url(${bg}); */
  background-size: cover;
  box-shadow: 0px 20px 15px -8px black;
  .logo {
    text-decoration: none;
  }
`;

const Logo = styled.div`
  font-size: 40px;
  color: rgb(255, 194, 0);
  font-family: 'Lobster', cursive;
  .logo {
    text-decoration: none;
  }
`;

const NavBtns = styled.nav`
  display: flex;
  gap: 30px;

  .btn {
    font-size: 25px;
    padding: 7px 14px;
    border-radius: 8px;
    text-decoration: none;
    color: #dfe2db;
    border: none;
    background-color: transparent;

    &:hover {
      color: #191919;
      background: rgb(255, 194, 0);
    }
    &[aria-current] {
      color: #191919;
      background: rgb(255, 194, 0);
    }
  }
`;
