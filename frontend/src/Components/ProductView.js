import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Rating from "../Components/Rating";
import styled from "styled-components";
import { useSelector } from "react-redux";

const ProductView = () => {
  const history = useHistory();
  const id = history.location.pathname.split("/")[2];

  const [qty, setQty] = useState(1);

  const { product } = useSelector((state) => state.Product);
  const selectedProduct = product.find((item) => item._id === id);

  // // Qty Count
  // const Count = () => {
  //   let arr = [];
  //   for (let i = 0; i < selectedProduct.countInStock; i++) {
  //     arr.push(i + 1);
  //   }
  //   return arr;
  // };

  // Adding to cart
  const addToCartHandler = () => {
    history.push(`/Cart/${id}?qty=${qty}`);
  };

  return (
    <>
      <Back>
        <Link className='back-btn' to='/'>
          Go Back
        </Link>
      </Back>
      <Product>
        <div className='image'>
          <img src={selectedProduct.image} alt='image not found' />
        </div>
        <div className='content'>
          <h3>{selectedProduct.name}</h3>
          <Rating
            review={selectedProduct.numReviews}
            rating={selectedProduct.rating}
          />
          <p>&#x20b9; {selectedProduct.price}</p>
          <p className='desc'>Description: {selectedProduct.description}</p>
        </div>
        <div className='add-to-cart'>
          <ul>
            <li>
              <p>Price:</p>
              <strong> &#8377; {selectedProduct.price}</strong>
            </li>
            <li>
              <p>Status:</p>
              <strong>
                {selectedProduct.countInStock > 0 ? "In Stock" : "Out of Stock"}
              </strong>
            </li>
            <li>
              <p>Qty:</p>
              <strong>
                <select
                  onChange={(e) => {
                    setQty(e.target.value);
                  }}
                  className='qty'
                  name='qty'
                >
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                </select>
              </strong>
            </li>
            <li>
              <button
                onClick={addToCartHandler}
                disabled={selectedProduct.countInStock === 0}
              >
                Add to Cart
              </button>
            </li>
          </ul>
        </div>
      </Product>
    </>
  );
};

const Product = styled.div`
  min-height: 40vh;
  width: 70%;
  margin: 4rem auto;
  color: #686868;
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, auto));
  .qty {
    border: none;
    outline: none;
    padding: 0.3rem 0.7rem;
    font-weight: 700;
    background: #f5f5f5;
    border-radius: 5px;
  }
  .content {
    .desc {
      margin-top: 2rem;
      font-size: 0.9rem;
    }
    h3 {
      text-transform: uppercase;
      font-weight: 500;
    }
  }
  .image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  ul li {
    border: 1px solid #ddd;
    margin-top: -1px; /* Prevent double borders */
    background-color: transparent;
    padding: 10px;
    display: flex;
    justify-content: space-between;

    button {
      width: 100%;
      text-align: center;
      background: black;
      color: white;
      font-size: 0.7rem;
      padding: 0.6rem 3rem;
      text-transform: uppercase;
      font-weight: 700;
      border: none;
      &:disabled {
        cursor: not-allowed;
        background-color: #cccccc;
      }
    }
  }
  ul :last-child {
    justify-content: center;
  }

  @media screen and (max-width: 842px) {
    /* grid-template-columns: repeat(auto-fill, minmax(50px, 1fr)); */
  }
`;

const Back = styled.div`
  font-weight: 700;
  width: 70%;
  margin: auto;
  margin-top: 1rem;
`;

export default ProductView;
