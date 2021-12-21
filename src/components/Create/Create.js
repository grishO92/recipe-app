import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { createRecipe } from '../../services/Crud';
import { useNavigate } from 'react-router';
import bg from '../../bg.jpg';
// import { useState } from 'react';

export const Create = () => {
  const navigate = useNavigate();
  // const [ingredients, setIngredients] = useState([]);
  // const addIngredientHandler = (value) => {
  //   setIngredients(value);
  // };

  const onRecipeCreate = (e) => {
    e.preventDefault();
    let {
      title,
      imgUrl,
      description,
      prepTime,
      portions,
      level,
      category,
      ingredients,
      directions,
    } = Object.fromEntries(new FormData(e.currentTarget));

    createRecipe({
      title,
      imgUrl,
      description,
      prepTime,
      portions,
      level,
      category,
      ingredients: ingredients.split(','),
      directions,
    }).then((result) => {
      navigate('/');
    });
  };

  return (
    <Wrapper>
      <form onSubmit={onRecipeCreate} method="POST" className="create">
        <h2>Create recipe</h2>
        <fieldset className="form-groups">
          <fieldset className="form-group-one">
            <fieldset className="form-group-one-left-section">
              <fieldset className="form-group-one-left-section-first">
                <fieldset className="inputs">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    id="title"
                    placeholder="recipe name"
                    name="title"
                  />
                </fieldset>
                <fieldset className="inputs">
                  <label htmlFor="imgUrl">Image</label>
                  <input
                    type="text"
                    id="imgUrl"
                    placeholder="img URL"
                    name="imgUrl"
                  />
                </fieldset>
              </fieldset>
              <fieldset className="inputs">
                <label htmlFor="description">Description</label>
                <textarea
                  rows="4"
                  type="text"
                  id="description"
                  placeholder="enter description"
                  name="description"
                />
              </fieldset>
            </fieldset>

            <fieldset className="form-group-one-right-section">
              <fieldset className="form-group-one-left-section-second">
                <fieldset className="form-group-one-left-section-second-sub">
                  <fieldset className="form-group-one-left-section-second-sub-article">
                    <label htmlFor="prepTime">Prep time</label>
                    <input
                      className="form-group-one-left-section-second-sub-article-input"
                      type="number"
                      id="prepTime"
                      placeholder="in mins"
                      name="prepTime"
                    />
                  </fieldset>
                  <fieldset className="form-group-one-left-section-second-sub-article">
                    <label htmlFor="portions">Portions</label>
                    <input
                      className="form-group-one-left-section-second-sub-article-input"
                      type="number"
                      id="portions"
                      placeholder="Qty"
                      name="portions"
                    />
                  </fieldset>
                </fieldset>
                <fieldset className="form-group-one-left-section-second-sub">
                  <fieldset className="form-group-one-left-section-second-sub-article">
                    <label htmlFor="level">Difficulty</label>
                    <select
                      className="form-group-one-left-section-second-sub-article-input"
                      id="level"
                      type="text"
                      name="level"
                    >
                      <option>Easy</option>
                      <option>Medium</option>
                      <option>Hard</option>
                    </select>
                  </fieldset>

                  <fieldset className="form-group-one-left-section-second-sub-article">
                    <label htmlFor="category">Category</label>
                    <select
                      className="form-group-one-left-section-second-sub-article-input"
                      id="category"
                      type="text"
                      name="category"
                    >
                      <option>Foods</option>
                      <option>Drinks</option>
                    </select>
                  </fieldset>
                </fieldset>
              </fieldset>
              <fieldset className="inputs">
                <label htmlFor="ingredients">Ingredients</label>
                <textarea
                  rows="4"
                  type="text"
                  id="ingredients"
                  placeholder="separated by coma"
                  name="ingredients"
                />
                {/* <input
                  type="text"
                  id="ingredients"
                  placeholder="separated by coma"
                  name="ingredients"
                />
                <button
                  onClick={addIngredientHandler}
                  type="button"
                  className="form-button-add"
                >
                  Add
                </button> */}
              </fieldset>
            </fieldset>
          </fieldset>

          <fieldset className="form-group-two">
            <label htmlFor="directions">Directions</label>
            <textarea
              rows="4"
              type="text"
              id="directions"
              placeholder="directions"
              name="directions"
            />
          </fieldset>
        </fieldset>

        <fieldset className="form-buttons">
          <button className="form-button" type="submit">
            Create
          </button>
          <Link className="form-button" to="/">
            Cancel
          </Link>
        </fieldset>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  animation: 300ms fadeIn cubic-bezier(0.785, 0.135, 0.15, 0.86);
  fieldset {
    border: none;
    /* margin: 0; */
    padding: 0;
  }

  .create {
    box-shadow: 0px 5px 15px 0px black;
    min-width: 600px;
    height: auto;
    padding: 20px 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    gap: 15px;
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

    .form-groups {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: center;

      input,
      textarea,
      select {
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

      .form-group-one {
        display: flex;
        gap: 20px;

        .inputs {
          display: flex;
          flex-direction: column;
          gap: 5px;
          .form-button-add {
            text-decoration: none;
            padding: 7px 14px;
            font-size: 25px;
            border-radius: 8px;
            border: 2px solid rgb(255, 194, 0);
            background: rgb(255, 194, 0);
            color: #191919;
            cursor: pointer;
          }
        }

        .form-group-one-left-section {
          display: flex;
          flex-direction: column;
          gap: 10px;

          .form-group-one-left-section-first {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
        }

        .form-group-one-right-section {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .form-group-one-left-section-second {
            display: flex;
            flex-direction: column;
            gap: 10px;

            .form-group-one-left-section-second-sub {
              display: flex;
              justify-content: space-between;
              gap: 20px;

              .form-group-one-left-section-second-sub-article {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 5px;

                .form-group-one-left-section-second-sub-article-input {
                  width: 133px;
                }
              }
            }
          }
        }
      }

      .form-group-two {
        display: flex;
        flex-direction: column;
        width: 100%;
        text-align: center;
        gap: 5px;
      }
    }

    .form-buttons {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      cursor: pointer;
      gap: 20px;

      .form-button {
        text-decoration: none;
        padding: 7px 14px;
        font-size: 25px;
        border-radius: 8px;
        border: 2px solid rgb(255, 194, 0);
        background: rgb(255, 194, 0);
        color: #191919;
        cursor: pointer;
      }
    }
  }
`;
