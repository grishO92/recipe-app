import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Create = () => {
  return (
    <Wrapper>
      <form className="create">
        <h2>Create recipe</h2>
        <section className="form-groups">
          <article className="form-group-one">
            <section className="form-group-one-left-section">
              <article className="form-group-one-left-section-first">
                <section className="inputs">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    id="title"
                    placeholder="recipe name"
                    name="title"
                  />
                </section>
                <section className="inputs">
                  <label htmlFor="imgUrl">Image</label>
                  <input
                    type="text"
                    id="imgUrl"
                    placeholder="img URL"
                    name="imgUrl"
                  />
                </section>
              </article>
              <article className="form-group-one-left-section-second">
                <section className="form-group-one-left-section-second-sub">
                  <article className="form-group-one-left-section-second-sub-article">
                    <label htmlFor="prepTime">Prep time</label>
                    <input
                      className="form-group-one-left-section-second-sub-article-input"
                      type="number"
                      id="prepTime"
                      placeholder="in mins"
                      name="prepTime"
                    />
                  </article>
                  <article className="form-group-one-left-section-second-sub-article">
                    <label htmlFor="portions">Portions</label>
                    <input
                      className="form-group-one-left-section-second-sub-article-input"
                      type="number"
                      id="portions"
                      placeholder="portions"
                      name="portions"
                    />
                  </article>
                </section>
                <section className="form-group-one-left-section-second-sub">
                  <article className="form-group-one-left-section-second-sub-article">
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
                  </article>

                  <article className="form-group-one-left-section-second-sub-article">
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
                  </article>
                </section>
              </article>
            </section>

            <section className="form-group-one-right-section">
              <section className="inputs">
                <label htmlFor="description">Description</label>
                <textarea
                  rows="4"
                  type="text"
                  id="description"
                  placeholder="enter description"
                  name="description"
                />
              </section>
              <section className="inputs">
                <label htmlFor="category">Ingredients</label>
                <textarea
                  rows="4"
                  type="text"
                  id="ingredients"
                  placeholder="separated by coma"
                  name="ingredients"
                />
              </section>
            </section>
          </article>

          <article className="form-group-two">
            <label htmlFor="directions">Directions</label>
            <textarea
              rows="4"
              type="text"
              id="directions"
              placeholder="directions"
              name="directions"
            />
          </article>
        </section>

        <section className="form-buttons">
          <button className="form-buttons-createbtn" type="submit">
            Create
          </button>
          <Link className="form-buttons-cancelBtn" to="/catalog">
            Cancel
          </Link>
        </section>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;

  .create {
    box-shadow: 0px 5px 15px 0px black;
    min-width: 600px;
    height: auto;
    padding: 20px 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;
    background: linear-gradient(
      0deg,
      rgba(25, 25, 25, 1) 0%,
      rgba(15, 15, 15, 1) 50%,
      rgba(25, 25, 25, 1) 100%
    );

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
          align-items: center;
          gap: 5px;
        }

        .form-group-one-left-section {
          display: flex;
          flex-direction: column;
          gap: 10px;

          .form-group-one-left-section-first {
            display: flex;
            flex-direction: column;
            gap: 10px;
            width: 270px;
          }

          .form-group-one-left-section-second {
            display: flex;
            flex-direction: column;
            gap: 10px;

            .form-group-one-left-section-second-sub {
              display: flex;
              justify-content: space-evenly;
              gap: 20px;

              .form-group-one-left-section-second-sub-article {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 5px;

                .form-group-one-left-section-second-sub-article-input {
                  width: 125px;
                }
              }
            }
          }
        }

        .form-group-one-right-section {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
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
      gap: 30px;

      .form-buttons-createbtn,
      .form-buttons-cancelBtn {
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
