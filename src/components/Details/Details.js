import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import bg from '../../bg.jpg';
import bg1 from '../../bg1.jpg';
import { useUserAuth } from '../../context/UserAuthContext';

import { deleteRecipe, getRecipeById } from '../../services/Crud';

export const Details = () => {
  const [recipe, setRecipe] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const { user } = useUserAuth();

  useEffect(() => {
    getRecipeById(id)
      .then((doc) => {
        setRecipe(doc.data());
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const buttonClickHandler = (e) => {
    if (e.target.textContent === 'Delete') {
      const modal = e.target.parentNode.children[2];
      modal.style = 'display: block';
    }
  };

  const onDeleteHandler = (e) => {
    if (e.target.textContent === 'Yes') {
      deleteRecipe(id).then((result) => {
        navigate('/');
      });
    } else if (e.target.textContent === 'No') {
      const modal = e.target.parentNode.parentNode.parentNode.parentNode;
      modal.style = 'display: none';
    }
  };

  return (
    <Wrapper>
      <section className="details">
        <article className="content">
          <section className="img-wrapper">
            <img className="img" src={recipe.imgUrl} alt="detail" />
          </section>
          <section className="card">
            <h2>Details</h2>

            <article className="detail-grid">
              <section className="desc">
                <h3 className="title">
                  <span>title: </span>
                  {recipe.title}
                </h3>
                <h3 className="author">
                  <span>Category: </span>
                  {recipe.category}
                </h3>
                <p className="Description">
                  <span>description: </span>
                  {recipe.description}
                </p>
                <h4>
                  Recipe:
                  {recipe.ingredients?.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </h4>
                <article className="prep-info">
                  <section className="prep-info-sub">
                    <h3 className="prep-info-sub-title">Time</h3>
                    <p> {recipe.prepTime} minutes</p>
                  </section>
                  <section className="prep-info-sub">
                    <h3 className="prep-info-sub-title">Portions</h3>
                    <p> {recipe.portions}</p>
                  </section>
                  <section className="prep-info-sub">
                    <h3 className="prep-info-sub-title">Level</h3>
                    <p> {recipe.level}</p>
                  </section>
                </article>
              </section>
            </article>
            <section onClick={buttonClickHandler} className="btns">
              {user && user.uid === recipe.author ? (
                <>
                  <Link className="btn edit" to={`/edit/${id}`}>
                    Edit
                  </Link>
                  <button className="btn delete" to="/">
                    Delete
                  </button>
                  <DeleteModal>
                    <section className="bg">
                      <article className="modal">
                        <h3 className="message">Are you sure?</h3>
                        <section onClick={onDeleteHandler} className="btns">
                          <button className="btn">Yes</button>
                          <button className="btn">No</button>
                        </section>
                      </article>
                    </section>
                  </DeleteModal>
                  <Link className="btn back" to="/">
                    Back
                  </Link>
                </>
              ) : (
                <Link className="btn back" to="/">
                  Back
                </Link>
              )}
            </section>
          </section>
        </article>
      </section>
      <section className="how-to-prep">
        <section className="how-to-desc">
          <h3 className="how-to">How to prepare?</h3>
          <p className="how-to-info">{recipe.directions}</p>
        </section>
      </section>
    </Wrapper>
  );
};

const DeleteModal = styled.article`
  display: none;
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  .bg {
    display: flex;
    align-items: center;
    justify-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    .modal {
      animation: 500ms fadeIn cubic-bezier(0.785, 0.135, 0.15, 0.86);
      box-shadow: 0px 5px 15px 0px black;
      background-image: url(${bg});
      color: #dfe2db;
      padding: 50px 80px;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  animation: 500ms fadeIn cubic-bezier(0.785, 0.135, 0.15, 0.86);

  .details {
    z-index: 0;
    box-shadow: 0px 5px 15px 0px black;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
    background: linear-gradient(
      0deg,
      rgba(25, 25, 25, 1) 0%,
      rgba(15, 15, 15, 1) 50%,
      rgba(25, 25, 25, 1) 100%
    );
    background-image: url(${bg});

    color: #dfe2db;
    border-radius: 8px;
    min-width: 768px;
    max-width: 1560px;
    .content {
      display: flex;
      flex-direction: row;

      .img-wrapper {
        .img {
          object-position: center;
          object-fit: cover;
          width: 750px;
          height: 100%;
          border-radius: 0.5rem 0 0 0.5rem;
        }
      }
      .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 20px 60px;
        gap: 2rem;
        border-radius: 0.5rem;
        h2 {
          display: flex;
          justify-content: center;
          font-size: 40px;
        }
        .detail-grid {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 2rem;
          .desc {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            .title {
              font-size: 1.8rem;
            }
            .author {
              font-size: 1.5rem;
            }
            span {
              font-size: 1.3rem;
              font-style: normal;
            }
            .recipe li {
              margin-left: 1.2rem;
              list-style: circle;
            }
            .prep-info {
              display: flex;
              justify-content: space-between;
              .prep-info-sub {
                display: flex;
                flex-direction: column;
                text-align: center;
                gap: 5px;
              }
            }
          }
        }
        .btns {
          display: flex;
          gap: 20px;
          justify-content: center;
          .btn {
            text-decoration: none;
            padding: 0.5rem;
            font-size: 25px;
            border-radius: 8px;
            border: 2px solid rgb(255, 194, 0);
            background: rgb(255, 194, 0);
            color: #191919;
            cursor: pointer;
          }
        }
      }
    }
  }
  .how-to-prep {
    z-index: -1;
    animation: 1500ms slideDown cubic-bezier(0.785, 0.135, 0.15, 0.86);
    box-shadow: 0px 5px 15px 0px black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(
      0deg,
      rgba(25, 25, 25, 1) 0%,
      rgba(15, 15, 15, 1) 50%,
      rgba(25, 25, 25, 1) 100%
    );
    background: url(${bg1});

    color: #dfe2db;
    border-radius: 0 0 8px 8px;
    width: 90%;
    padding: 60px;
    position: relative;
    align-self: center;
    top: -10px;

    .how-to-desc {
      display: flex;
      flex-direction: column;
      gap: 20px;
      text-align: center;
      .how-to-info {
        text-align: left;
      }
    }
  }
`;
