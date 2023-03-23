import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { RecipeCard } from '../Partial/RecipeCard';
import { getAllRecipies } from '../../services/Crud';
import bg from '../../bg.jpg';

export const Catalog = () => {
  const [recipies, setRecipies] = useState([]);
  const [filteredRecipe, setFilteredRecipe] = useState([]);

  useEffect(() => {
    getAllRecipies()
      .then((data) => {
        setRecipies(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      setRecipies([]);
      setFilteredRecipe([]);
    };
  }, []);

  const onClickHandler = (e) => {
    if (e.target.className === 'fas fa-border-all') {
      console.log('all');
      setFilteredRecipe(recipies);
    } else if (e.target.className === 'fas fa-glass-whiskey') {
      console.log('drinks');
      setFilteredRecipe(recipies.filter((x) => x.category === 'Drinks'));
    } else if (e.target.className === 'fas fa-hamburger') {
      console.log('food');
      setFilteredRecipe(recipies.filter((x) => x.category === 'Foods'));
    }
  };

  return (
    <Wrapper>
      <Category onClick={onClickHandler}>
        <button className="category">
          <i className="fas fa-border-all"></i>
        </button>
        <button className="category">
          <i className="fas fa-glass-whiskey"></i>
        </button>
        <button className="category">
          <i className="fas fa-hamburger"></i>
        </button>
      </Category>
      {recipies.length === 0 ? (
        <h1 className="empty">No recipies available!</h1>
      ) : (
        <CatalogGrid>
          {filteredRecipe.length <= 0
            ? recipies.map((x) => <RecipeCard key={x.id} recipe={x} />)
            : filteredRecipe.map((x) => <RecipeCard key={x.id} recipe={x} />)}
        </CatalogGrid>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  .empty {
    animation: 1500ms empty ease-in;
    display: flex;
    justify-self: center;
    font-size: 40;
    color: #dfe2db;
  }
`;

const CatalogGrid = styled.section`
  animation: 1000ms slideDown cubic-bezier(0.785, 0.135, 0.15, 0.86);
  margin-top: 100px;
  display: grid;
  margin: 0rem;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;

const Category = styled.aside`
  z-index: 1;
  float: left;
  animation: 700ms slideToRight cubic-bezier(0.785, 0.135, 0.15, 0.86);
  box-shadow: 0px 20px 15px -8px black;
  background: url(${bg});
  color: #dfe2db;
  border-radius: 0 8px 8px 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  gap: 10px;
  left: -2px;
  top: 20%;
  .category {
    font-size: 25px;
    text-align: center;
    justify-self: center;
    background: transparent;
    border: none;

    padding: 7px 14px;
    border-radius: 8px;
    text-decoration: none;
    color: #dfe2db;

    &:hover {
      cursor: pointer;
      color: rgb(255, 194, 0);
      transform: scale(1);
    }
    &:focus {
      transform: scale(1.4);
      color: rgb(255, 194, 0);
    }
  }
`;
