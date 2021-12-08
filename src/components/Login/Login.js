import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Login = () => {
  return (
    <Wrapper>
      <form className="login">
        <h2>Login into account</h2>
        <section className="inputs">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
            required
          />
        </section>
        <section className="inputs">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            required
          />
        </section>
        <button type="submit">Log in</button>
      </form>
      <h5 className="hidden">
        Don't have an account? Click
        <Link to="/register">here</Link>
        to register.
      </h5>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: 500ms slideDown ease;

  .login {
    z-index: 1;
    box-shadow: 0px 5px 15px 0px black;
    width: 500px;
    height: auto;
    padding: 60px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
    background: linear-gradient(
      0deg,
      rgba(25, 25, 25, 1) 0%,
      rgba(15, 15, 15, 1) 50%,
      rgba(25, 25, 25, 1) 100%
    );

    color: #dfe2db;
    border-radius: 8px;

    h2 {
      display: flex;
      justify-content: center;
      font-size: 40px;
    }

    .inputs {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 20px;

      input {
        padding: 0.7rem;
        font-size: 20px;
        border-radius: 8px;
        border: 2px solid white;

        &:focus {
          outline: none;
          border-radius: 8px;
          border: 2px solid rgb(255, 194, 0);
        }
      }
    }
    button {
      padding: 0.5rem;
      font-size: 25px;
      border-radius: 8px;
      border: 2px solid rgb(255, 194, 0);
      background: rgb(255, 194, 0);
      color: #191919;
      cursor: pointer;
    }
  }
  .hidden {
    padding: 0 0 1rem 0;
    display: flex;
    justify-content: center;
    gap: 4px;
    animation: 1500ms slideDown cubic-bezier(0.785, 0.135, 0.15, 0.86);
    box-shadow: 0px 5px 15px 0px black;
    background: linear-gradient(
      0deg,
      rgba(25, 25, 25, 1) 0%,
      rgba(15, 15, 15, 1) 50%,
      rgba(25, 25, 25, 1) 100%
    );
    color: #dfe2db;
    border-radius: 0 0 8px 8px;
    padding: 40px;
    position: relative;
    a {
      text-decoration: none;
      color: #fff055;
    }
  }
`;
