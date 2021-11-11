import React from "react";
import styled from "styled-components";
import EmptyCart from "../img/empty-cart.svg";
import { Link } from "react-router-dom";

const Alert = () => {
  return (
    <StyledAlert>
      <div className='empty-cart'>
        <img src={EmptyCart} alt='' />
        <p>Your Cart Is Empty </p>
        <Link to='/'>
          <button>Shop Now</button>
        </Link>
      </div>
    </StyledAlert>
  );
};

const StyledAlert = styled.div`
  width: 70%;
  height: 90vh;
  margin: 2rem auto;

  .empty-cart {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  img {
    max-width: 25rem;
    margin: 2rem;
  }
  p {
    color: #808080;
    font-size: 1.2rem;
  }
  button {
    margin-top: 1rem;
    border: 3px solid transparent;
    border-radius: 5px;
    text-align: center;
    background: var(--green);
    color: white;
    font-size: 1rem;
    padding: 0.4rem 2rem;
    &:hover {
      background: white;
      color: var(--green);
      border: 3px solid var(--green);
    }
  }
`;

export default Alert;
