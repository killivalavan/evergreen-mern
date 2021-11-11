import React, { useEffect } from "react";
import styled from "styled-components";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const Product = ({ id, name, img, price, review, ratings }) => {
  return (
    <StyledProduct>
      <Link className='card' to={`/Product/${id}`}>
        <img src={img} alt='No image Found' />
        <div className='card-body'>
          <h4>{name}</h4>
          <Rating className='rating' review={review} rating={ratings} />
          <h3>&#8377; {price}</h3>
        </div>
      </Link>
    </StyledProduct>
  );
};

const StyledProduct = styled.div`
  margin: 1.5rem 2rem 2rem 0rem;
  width: 14rem;
  display: flex;
  color: #585858;
  border: 1px solid #e8e8e8;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  .card-body {
    padding: 0.5rem;
  }
  img {
    padding: 0.5rem;
    display: block;
    object-fit: cover;
    width: 100%;
  }
  h4 {
    font-weight: 600;
  }

  h3 {
    font-size: 1rem;
    font-weight: 500;
  }
`;

export default Product;
