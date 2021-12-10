import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { RecipeCard } from '../Partial/RecipeCard';
import { getAllRecipies } from '../../services/Crud';
import bg from '../../bg.jpg';
import bg1 from '../../bg1.jpg';

export const Catalog = () => {
  const [recipies, setRecipies] = useState([]);

  useEffect(() => {
    getAllRecipies()
      .then((data) => {
        setRecipies(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Wrapper>
      <Aside>
        <Under />
        <Category>
          <button className="category">All</button>
          <button className="category">Foods</button>
          <button className="category">Drinks</button>
        </Category>
      </Aside>
      <CatalogGrid>
        {recipies.map((x) => (
          <RecipeCard key={x.id} recipe={x} />
        ))}
      </CatalogGrid>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: grid;
`;

const CatalogGrid = styled.section`
  animation: 1000ms slideDown cubic-bezier(0.785, 0.135, 0.15, 0.86);
  margin-top: 100px;
  display: grid;
  margin: 0rem;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 350px;
`;

const Category = styled.section`
  z-index: -1;
  animation: 700ms slideToRight cubic-bezier(0.785, 0.135, 0.15, 0.86);
  box-shadow: 0px 20px 15px -8px black;
  background: url(${bg});
  color: #dfe2db;
  border-radius: 0 0 8px 8px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  gap: 10px;
  left: -2px;
  top: 20%;
  .category {
    font-size: 22px;
    background: transparent;
    border: none;
    padding: 7px 14px;
    border-radius: 8px;
    text-decoration: none;
    color: #dfe2db;

    &:hover {
      color: #191919;
      background: rgb(255, 194, 0);
    }
    &[aria-current] {
      color: #191919;
      background: rgb(255, 194, 0);
    }
  }
`;
const Aside = styled.aside`
  display: flex;
  flex-direction: column;
`;

const Under = styled.section`
  z-index: -2;
  animation: 1500ms slideToRight cubic-bezier(0.785, 0.135, 0.15, 0.86);
  box-shadow: 0px 20px 15px -8px black;
  background: url(${bg1});
  color: #dfe2db;
  border-radius: 0 0 8px 8px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  height: 100%;
  gap: 10px;
  top: 0;
  left: 0px;
`;
