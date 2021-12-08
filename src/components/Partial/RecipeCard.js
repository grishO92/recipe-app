import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const RecipeCard = () => {
  return (
    <Card>
      <img
        src="https://images.unsplash.com/photo-1555813456-94a3dd418cd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80"
        alt=""
      />
      <div className="info">
        <h2>Pancakes</h2>
        <Link className="btn" to="/details">
          Details
        </Link>
      </div>
    </Card>
  );
};

const Card = styled.div`
  overflow: hidden;
  border-radius: 0.5rem;
  opacity: 0.8;
  box-shadow: 0px 5px 15px -8px black;

  &:hover {
    box-shadow: 0px 10px 15px -5px black;
    opacity: 1;
    transform: scale(1.05);
    transition: transform 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  img {
    object-position: center;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    object-fit: cover;
  }

  .info {
    z-index: 1;
    background: linear-gradient(
      hsl(0 0% 0%/0),
      hsl(20 0% 0%/0.3) 20%,
      hsl(0 0% 0%/1)
    );
    padding: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transform: translateY(0);
    transition: transform 500ms ease;

    h2 {
      color: #dfe2db;
    }
    .btn {
      font-size: 20px;
      padding: 7px 14px;
      color: #191919;
      text-decoration: none;
      border-radius: 8px;
      background: rgb(255, 194, 0);
    }
  }
  &:hover .info {
    transform: translateY(-100%);
  }
`;
