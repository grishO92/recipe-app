import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';
import bg from '../../bg.jpg';
import { logout } from '../../services/Auth';
import { useUserAuth } from '../../context/UserAuthContext';

export const Header = () => {
  console.log(useUserAuth());
  const { user } = useUserAuth();
  const navigate = useNavigate();

  const onLogout = (e) => {
    e.preventDefault();
    logout();
    navigate('/');
  };

  const loggedIn = (
    <>
      <NavLink className="btn" to="my-recipies">
        My recipies
      </NavLink>
      <NavLink className="btn" to="create">
        Create recipe
      </NavLink>
      <button className="btn" onClick={onLogout}>
        Logout
      </button>
    </>
  );

  const guest = (
    <>
      <NavLink className="btn" to="login">
        Login
      </NavLink>
      <NavLink className="btn" to="register">
        Register
      </NavLink>
    </>
  );

  return (
    <NavWrapper>
      <Logo>recipeLand</Logo>
      <NavBtns>
        <NavLink className="btn" to="/">
          Catalog
        </NavLink>
        {user ? loggedIn : guest}
      </NavBtns>
    </NavWrapper>
  );
};

const NavWrapper = styled.header`
  animation: 700ms slideDown cubic-bezier(0.785, 0.135, 0.15, 0.86);

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
  background-image: url(${bg});
  box-shadow: 0px 20px 15px -8px black;
`;

const Logo = styled.div`
  font-size: 40px;
  color: rgb(255, 194, 0);
  font-family: 'Lobster', cursive;
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
