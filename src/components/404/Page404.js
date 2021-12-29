import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Page404 = () => {
  return (
    <WrongPage>
      Something went wrong! Click
      <Link to="/">here</Link>
      to go to catalog!
    </WrongPage>
  );
};

const WrongPage = styled.h1`
  animation: 1500ms empty ease-in;
  display: flex;
  justify-content: center;
  font-size: 40;
  color: #dfe2db;
  a {
    margin: 0 8px;
    text-decoration: none;
    color: #fff055;
  }
`;
