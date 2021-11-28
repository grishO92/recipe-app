import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Register = () => {
  return (
    <Wrapper>
      <Form className="login">
        <h2>Register form</h2>
        <input type="text" placeholder="Enter Email" required />
        <input type="password" placeholder="Enter Password" required />
        <button type="submit">Register</button>
        <h5>
          Already have an account? Click
          <Link to="/login">here</Link>
          to login.
        </h5>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  box-shadow: 0px 5px 15px 0px black;
  width: 350px;
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
  input {
    padding: 0.7rem;
    font-size: 20px;
    border-radius: 8px;
    border: 2px solid white;

    &:focus {
      outline: none;
      border-radius: 8px;
      border: 2px solid rgb(95, 211, 95);
    }
  }
  button {
    padding: 0.5rem;
    font-size: 25px;
    border-radius: 8px;
    border: 2px solid #fff055;
    background: linear-gradient(
      90deg,
      rgba(255, 194, 0, 1) 0%,
      rgba(255, 207, 0, 1) 25%,
      rgba(251, 255, 0, 1) 50%,
      rgba(255, 207, 0, 1) 75%,
      rgba(255, 194, 0, 1) 100%
    );
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
`;