import { Link } from 'react-router-dom';
import styled from 'styled-components';
import bg from '../../bg.jpg';
import bg1 from '../../bg1.jpg';

export const Details = () => {
  return (
    <Wrapper>
      <section className="details">
        <article className="content">
          <section className="img-wrapper">
            <img
              className="img"
              src="https://images.unsplash.com/photo-1555813456-94a3dd418cd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80"
              alt="detail"
            />
          </section>
          <section className="card">
            <h2>Details</h2>

            <article className="detail-grid">
              <section className="desc">
                <h3 className="title">
                  <span>title: </span>Pancakes
                </h3>
                <h3 className="author">
                  <span>author: </span>Bro
                </h3>
                <p className="Description">
                  <span>description: </span> Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Nobis tempora architecto error
                  distinctio facere
                </p>
                <h3>
                  Recipe:
                  <ul className="recipe">
                    <li>eggs</li>
                    <li>flower</li>
                    <li>oil</li>
                    <li>backing soda</li>
                    <li>milk</li>
                  </ul>
                </h3>
                <article className="prep-info">
                  <section className="prep-info-sub">
                    <h3 className="prep-info-sub-title">Time</h3>
                    <p>10 minutes</p>
                  </section>
                  <section className="prep-info-sub">
                    <h3 className="prep-info-sub-title">Portions</h3>
                    <p>10 </p>
                  </section>
                  <section className="prep-info-sub">
                    <h3 className="prep-info-sub-title">Level</h3>
                    <p>Easy</p>
                  </section>
                </article>
              </section>
            </article>
            <section className="btns">
              <Link className="btn edit" to="/edit/:id">
                Edit
              </Link>
              <Link className="btn delete" to="catalog">
                Delete
              </Link>
              <Link className="btn back" to="/">
                Back
              </Link>
            </section>
          </section>
        </article>
      </section>
      <section className="how-to-prep">
        <section className="how-to-desc">
          <h3 className="how-to">How to prepare?</h3>
          <p className="how-to-info">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            obcaecati doloribus sunt maiores quam magni recusandae quod officia
            sed consequuntur dolorum, deleniti eum! Fugiat, cum iusto? Commodi
            incidunt molestiae tempore? Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Aspernatur obcaecati doloribus sunt maiores quam
            magni recusandae quod officia sed consequuntur dolorum, deleniti
            eum! Fugiat, cum iusto? Commodi incidunt molestiae tempore? Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            obcaecati doloribus sunt maiores quam magni recusandae quod officia
            sed consequuntur dolorum, deleniti eum! Fugiat, cum iusto? Commodi
            incidunt molestiae tempore?
          </p>
        </section>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  animation: 300ms fadeIn ease;

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
        margin: 0px 60px;
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
      }
      .btns {
        display: flex;
        gap: 1rem;
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
