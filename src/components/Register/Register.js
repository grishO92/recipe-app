import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useUserAuth } from '../../context/UserAuthContext';
import { register } from '../../services/Auth';
import { Page404 } from '../404/Page404';

export const Register = () => {
  const navigate = useNavigate();
  const { user } = useUserAuth();

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const formErrors = {};

  const onRegister = (e) => {
    e.preventDefault();

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    let { email, password } = Object.fromEntries(new FormData(e.currentTarget));

    setErrors({});
    setLoading(true);
    if (!regex.test(email) || !password) {
      formErrors.error = 'Invalid email or password!';
      setErrors(formErrors);
      setLoading(false);
    } else {
      register(email, password)
        .then((user) => navigate('/', { replace: true }))
        .catch((error) => {
          if (error.message.includes('email-already-in-use')) {
            formErrors.error = 'Email already in use!';
          }
          if (error.message.includes('invalid-email')) {
            formErrors.error = 'Invalid email or password!';
          }
          if (error.message.includes('internal-error')) {
            formErrors.password = 'Password is required!';
          }
          if (error.message.includes('weak-password')) {
            formErrors.password = 'Password must be more than 6 characters!';
          }
          setErrors(formErrors);
        });
      setLoading(false);
    }
  };

  return (
    <>
      {!user ? (
        <Wrapper>
          <form method="POST" onSubmit={onRegister} className="register">
            <h2>Create account</h2>
            <section className="inputs">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
              />
            </section>
            <section className="inputs">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
              />
            </section>
            <button disabled={loading} type="submit">
              Register
            </button>
            {errors && <p className="error">{errors.error}</p>}
          </form>
          <h5 className="hidden">
            Already have an account? Click
            <Link to="/login">here</Link>
            to login.
          </h5>
        </Wrapper>
      ) : (
        <Page404 />
      )}
    </>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: 500ms slideDown cubic-bezier(0.785, 0.135, 0.15, 0.86);

  .register {
    z-index: 1;
    /* box-shadow: 0px 5px 15px 0px black; */
    width: 500px;
    height: auto;
    padding: 60px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    background: linear-gradient(
      0deg,
      rgba(25, 25, 25, 1) 0%,
      rgba(15, 15, 15, 1) 50%,
      rgba(25, 25, 25, 1) 100%
    );
    background: #1c2027;
    position: relative;
    color: #dfe2db;
    border-radius: 8px;

    .error {
      align-self: center;
      position: absolute;
      bottom: 20px;
      color: crimson;
      text-transform: uppercase;
      text-shadow: #191919;
      font-weight: 600;
      font-size: 14px;
    }

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
    display: flex;
    justify-content: center;
    gap: 4px;
    /* box-shadow: 0px 5px 15px 0px black; */
    background: linear-gradient(
      0deg,
      rgba(25, 25, 25, 1) 0%,
      rgba(15, 15, 15, 1) 50%,
      rgba(25, 25, 25, 1) 100%
    );
    background: #23262d;

    animation: 1500ms slideDown cubic-bezier(0.785, 0.135, 0.15, 0.86);
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
