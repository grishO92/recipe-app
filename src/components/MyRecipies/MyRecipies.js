import styled from 'styled-components';
// import { RecipeCard } from '../Partial/RecipeCard';

export const MyRecipies = () => {
  return (
    <Wrapper>
      {/* <RecipeCard />
      <RecipeCard /> */}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  animation: 300ms slideDown ease;

  margin-top: 100px;
  display: grid;
  margin: 0rem;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 350px;
`;
