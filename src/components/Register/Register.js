import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import bg from '../../bg.jpg';
import bg1 from '../../bg1.jpg';
import { useUserAuth } from '../../context/UserAuthContext';
import { register } from '../../services/Auth';

export const Register = () => {
  const navigate = useNavigate();
  const { user } = useUserAuth();
  const onRegister = (e) => {
    e.preventDefault();

    let { email, password } = Object.fromEntries(new FormData(e.currentTarget));

    register(email, password).then((result) =>
      navigate('/', { replace: true })
    );
  };

  return (
    <>
      {
        !user && (
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
            </form>
            <h5 className="hidden">
              Already have an account? Click
              <Link to="/login">here</Link>
              to login.
            </h5>
          </Wrapper>
        )
        // : (
        //   navigate(`/`)
        // )
      }
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
    background-image: url(${bg});

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
    display: flex;
    justify-content: center;
    gap: 4px;
    box-shadow: 0px 5px 15px 0px black;
    background: linear-gradient(
      0deg,
      rgba(25, 25, 25, 1) 0%,
      rgba(15, 15, 15, 1) 50%,
      rgba(25, 25, 25, 1) 100%
    );
    background-image: url(${bg1});

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
