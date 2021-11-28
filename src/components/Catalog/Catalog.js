import styled from 'styled-components';
import { RecipeCard } from '../Partial/RecipeCard';

export const Catalog = () => {
  return (
    <Wrapper>
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 100px;
  display: grid;
  margin: 0rem;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 400px;
`;
