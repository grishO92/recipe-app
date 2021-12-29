import { doc, onSnapshot } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import bg from '../../bg.jpg';
import bg1 from '../../bg1.jpg';
import { useUserAuth } from '../../context/UserAuthContext';
import { db } from '../../firebaseConfig';

import { deleteRecipe, addLike } from '../../services/Crud';

export const Details = () => {
  const [recipe, setRecipe] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useUserAuth();

  useEffect(() => {
    onSnapshot(doc(db, 'recipies', id), (doc) => {
      setRecipe(doc.data());
    });
  }, [id]);

  const buttonClickHandler = (e) => {
    e.preventDefault();

    if (e.target.className === 'far fa-thumbs-up') {
      if (recipe.likes?.includes(user.uid)) {
        e.target.style = 'color: white';
      }
      addLike(id, user.uid);
    }
    if (e.target.className === 'far fa-trash-alt') {
      const modal = e.target.parentNode.parentNode.children[2];
      modal.style = 'display: block';
    }

    if (e.target.textContent === 'Yes') {
      deleteRecipe(id).then((result) => {
        navigate('/my-recipies');
      });
    } else if (e.target.textContent === 'No') {
      const modal = e.target.parentNode.parentNode.parentNode.parentNode;
      modal.style = 'display: none';
    }
  };

  return (
    <Wrapper>
      <section onClick={buttonClickHandler} className="btns">
        {user && user.uid === recipe?.author ? (
          <>
            <Link className="btn back" to="/">
              <i className="fas fa-arrow-alt-circle-left"></i>
            </Link>
            <Link className="btn edit" to={`/edit/${id}`}>
              <i className="fas fa-edit"></i>
            </Link>

            <DeleteModal>
              <section className="bg">
                <article className="modal">
                  <h3 className="message">
                    Are you sure you want to delete this recipe?
                  </h3>
                  <section className="btnsM">
                    <button className="btnM">Yes</button>
                    <button className="btnM">No</button>
                  </section>
                </article>
              </section>
            </DeleteModal>

            <button className="btn delete">
              <i className="far fa-trash-alt"></i>
            </button>
            <i className="likes far fa-thumbs-up">
              {' '}
              {recipe?.likes?.length ? recipe?.likes?.length : 0}
            </i>
          </>
        ) : (
          <>
            <Link className="btn back" to="/">
              <i className="fas fa-arrow-alt-circle-left"></i>
            </Link>
            {user ? (
              <button className="btn delete">
                <i className="far fa-thumbs-up">
                  {' '}
                  {recipe?.likes?.length ? recipe?.likes?.length : 0}
                </i>
              </button>
            ) : (
              <i className="likes far fa-thumbs-up">
                {' '}
                {recipe?.likes?.length ? recipe?.likes?.length : 0}
              </i>
            )}
          </>
        )}
      </section>
      <section className="details">
        <article className="content">
          <section className="img-wrapper">
            <img className="img" src={recipe?.imgUrl} alt="detail" />
          </section>
          <section className="card">
            <h2>Details</h2>

            <article className="detail-grid">
              <section className="desc">
                <h3 className="title">
                  <span>title: </span>
                  {recipe?.title}
                </h3>
                <h3 className="category">
                  <span>category: </span>
                  {recipe?.category}
                </h3>
                <h3 className="description">
                  <span>description: </span>
                  {recipe?.description}
                </h3>
                <ul>
                  <h4>Recipe:</h4>
                  {recipe?.ingredients?.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
                <article className="prep-info">
                  <section className="prep-info-sub">
                    <h3 className="prep-info-sub-title">
                      <i className="fas fa-stopwatch"></i>
                    </h3>
                    <p> {recipe?.prepTime} min</p>
                  </section>
                  <section className="prep-info-sub">
                    <h3 className="prep-info-sub-title">
                      <i className="fas fa-utensils"></i>
                    </h3>
                    <p> {recipe?.portions}</p>
                  </section>
                  <section className="prep-info-sub">
                    <h3 className="prep-info-sub-title">
                      <i className="fas fa-poll"></i>
                    </h3>
                    <p> {recipe?.level}</p>
                  </section>
                </article>
              </section>
            </article>
          </section>
        </article>
      </section>
      <section className="how-to-prep">
        <section className="how-to-desc">
          <h3 className="how-to">How to prepare?</h3>
          <p className="how-to-info">{recipe?.directions}</p>
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
      .btnsM {
        display: flex;
        gap: 20px;
        justify-content: center;

        .btnM {
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

          .desc {
            display: flex;
            flex-direction: column;
            gap: 35px;
            .title {
              font-size: 25px;
            }
            .category {
              font-size: 25px;
            }
            span,
            h4 {
              font-size: 22px;
              font-weight: 300;
            }
            li {
              font-weight: 600;
              list-style: circle;
            }
            .prep-info {
              display: flex;
              gap: 40px;

              .prep-info-sub {
                display: flex;
                font-size: 25px;
                flex-direction: column;
                text-align: center;
                gap: 10px;
                p {
                  font-size: 18px;
                }
              }
            }
          }
        }
      }
    }
  }
  .btns {
    display: flex;
    flex-direction: row;
    animation: 1500ms slideUp cubic-bezier(0.785, 0.135, 0.15, 0.86);
    box-shadow: 0px 5px 15px 0px black;
    border-radius: 8px 8px 0 0;
    gap: 20px;
    align-items: center;
    justify-content: space-evenly;
    background: url(${bg1});
    width: 25%;
    padding: 8px;
    align-self: center;

    .likes {
      color: #dfe2db;
      font-size: 25px;
    }

    .btn {
      text-decoration: none;
      padding: 0.5rem;
      font-size: 20px;
      border-radius: 8px;
      color: #dfe2db;
      background: transparent;
      border: 2px solid transparent;
      cursor: pointer;

      &:hover {
        color: rgb(255, 194, 0);
        transform: scale(1.5);
      }
      &:focus.delete {
        color: crimson;
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
