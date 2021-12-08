import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Register = () => {
  return (
    <Wrapper>
      <form className="register">
        <h2>Create account</h2>
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
        <button type="submit">Register</button>
        <h5>
          Already have an account? Click
          <Link to="/login">here</Link>
          to login.
        </h5>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  animation: 300ms slideDown ease;

  .register {
    box-shadow: 0px 5px 15px 0px black;
    width: 500px;
    height: auto;
    padding: 20px 60px;
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

    h5 {
      padding: 0 0 1rem 0;
      display: flex;
      justify-content: center;
      gap: 4px;
    }
    h5 a {
      text-decoration: none;
      color: #fff055;
    }
  }
`;
