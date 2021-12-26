import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const RecipeCard = ({ recipe }) => {
  return (
    <Card>
      <img src={recipe.imgUrl} alt="" />
      <div className="info">
        <h2>{recipe.title}</h2>
        <p>{recipe.description}</p>
        <Link className="btn" to={`/details/${recipe.id}`}>
          Details
        </Link>
      </div>
    </Card>
  );
};

const Card = styled.article`
  animation: 500ms fadeIn ease;
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
      hsl(20 0% 0%/0.3) 25%,
      hsl(0 0% 0%/0.8)
    );
    padding: 20px;
    border-radius: 8px;
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transform: translateY(0);
    transition: transform 500ms cubic-bezier(0.785, 0.135, 0.15, 0.86);

    h2,
    p {
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
