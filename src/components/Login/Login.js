import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import bg from '../../bg.jpg';
import bg1 from '../../bg1.jpg';
import { useUserAuth } from '../../context/UserAuthContext';
import { login } from '../../services/Auth';
import { Page404 } from '../404/Page404';

export const Login = () => {
  const navigate = useNavigate();
  const { user } = useUserAuth();

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const formErrors = {};

  const onLogin = (e) => {
    e.preventDefault();

    // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    let { email, password } = Object.fromEntries(new FormData(e.currentTarget));

    setErrors({});
    setLoading(true);

    login(email, password)
      .then((user) => {
        console.log(user);
        navigate('/', { replace: true });
      })
      .catch((error) => {
        if (error.message.includes('invalid-email')) {
          formErrors.error = 'invalid email';
        }
        if (error.message.includes('internal-error')) {
          formErrors.error = 'missing password';
        }
        if (error.message.includes('user-not-found')) {
          formErrors.error = 'no such user';
        }
        if (error.message.includes('wrong-password')) {
          formErrors.error = 'wrong-password';
        }
        if (error.message.includes('too-many-requests')) {
          formErrors.error =
            'too many failed login attempts. Please try again later!';
        }
        // if (!email && !password) {
        //   console.log('no email no password');
        //   formErrors.error = 'Email and password are required!';
        //   setErrors(formErrors);
        // } else if (
        //   !email
        //   // || (email && error.message.includes('auth/invalid-email'))
        // ) {
        //   console.log('no valid email');
        //   formErrors.error = 'This is not a valid email!';
        // } else if (!password) {
        //   formErrors.error = 'Password is required!';
        // } else if (password.length < 6) {
        //   formErrors.error = 'Password is less than 6 characters!';
        // } else if (password.length > 15) {
        //   formErrors.error = "Password can't be more than 15 characters!";
        // }

        // formErrors.error = error.message;

        setErrors(formErrors);
        // setErrors({});
        setLoading(false);
      });
  };

  return (
    <>
      {!user ? (
        <Wrapper>
          <form method="POST" onSubmit={onLogin} className="login">
            <h2>Login into account</h2>
            <section className="inputs">
              <label htmlFor="email">Email</label>
              <input
                type="text"
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
              Log in
            </button>
            {errors && <p className="error">{errors.error}</p>}
          </form>
          <h5 className="hidden">
            Don't have an account? Click
            <Link to="/register">here</Link>
            to register.
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

  .login {
    z-index: 1;
    box-shadow: 0px 5px 15px 0px black;
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
    background-image: url(${bg});
    color: #dfe2db;
    border-radius: 8px;

    .error {
      align-self: center;
      color: crimson;
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
    background-image: url(${bg1});

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
