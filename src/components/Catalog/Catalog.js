import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { RecipeCard } from '../Partial/RecipeCard';
import { getAllRecipies } from '../../services/Crud';

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
      {recipies.map((x) => (
        <RecipeCard key={x.id} recipe={x} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  animation: 1000ms slideDown ease;

  margin-top: 100px;
  display: grid;
  margin: 0rem;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 350px;
`;
