import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <NavWrapper>
      <Logo>recipeLand</Logo>
      <NavBtns>
        <NavLink className="btn" to="/">
          Catalog
        </NavLink>
        <NavLink className="btn" to="my-recipies">
          My recipies
        </NavLink>
        <NavLink className="btn" to="create">
          Create recipe
        </NavLink>
        <NavLink className="btn" to="login">
          Login
        </NavLink>
        <NavLink className="btn" to="register">
          Register
        </NavLink>
        <NavLink className="btn" to="logout">
          Logout
        </NavLink>
      </NavBtns>
    </NavWrapper>
  );
};

const NavWrapper = styled.header`
  animation: 700ms slideDown ease;

  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  box-shadow: 0px 5px 15px -8px black;
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
    padding: 7px 14px;
    border-radius: 8px;
    text-decoration: none;
    color: #dfe2db;

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
