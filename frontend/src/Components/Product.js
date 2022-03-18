import React, { useEffect } from "react";
import styled from "styled-components";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const Product = ({ id, name, img, price, review, ratings }) => {
  return (
    <StyledProduct>
      <Link className="link" to={`/Product/${id}`}>
        <img src={img} alt="No image Found" />
        <div className="cardBody">
          <p>{name}</p>
          <Rating className="rating" review={review} rating={ratings} />
          <div className="price">
            {" "}
            <span>&#8377;</span> {price}
          </div>
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
  .cardBody {
    padding: 0.5rem;
  }
  img {
    padding: 0.5rem;
    display: block;
    object-fit: cover;
    width: 100%;
  }
  p {
    font-size: 0.9rem;
    font-weight: 600;
  }

  .price {
    font-size: 1.1rem;
    font-weight: 500;
  }
  .link {
    &:hover {
      color: black;
    }
  }
`;

export default Product;
