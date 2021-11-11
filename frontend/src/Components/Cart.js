import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { fetchCartItems, deleteItem } from "../Actions/CartAction";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Alert from "./Alert";
import { Link } from "react-router-dom";

const Cart = () => {
  const history = useHistory();
  const id = history.location.pathname.split("/")[2];

  const dispatch = useDispatch();

  const qty = Number(history.location.search.split("=")[1]);

  useEffect(() => {
    {
      id && dispatch(fetchCartItems(id, qty));
    }
  }, [dispatch, id, qty]);

  //Get Store data
  const { cartItems } = useSelector((state) => state.Cart);

  const itemRemoveHandler = (id) => {
    dispatch(deleteItem(id));
    history.push("/Cart");
  };

  // Checkout handler
  const checkoutHandler = () => {
    history.push("/login?redirect=shipping");
  };

  return (
    <StyledCart>
      <p className='title'>SHOPPING CART</p>
      {cartItems.length === 0 ? (
        <Alert />
      ) : (
        <CartItems>
          <div className='grid-one'>
            {cartItems.map((item) => (
              <div className='card' key={item.product}>
                <img src={item.image} alt='' />
                <p className='product-name'>
                  <Link to={`/Product/${item.product}`}>{item.name}</Link>
                </p>
                <p>{item.price}</p>

                <select
                  onChange={(e) => {
                    dispatch(
                      fetchCartItems(item.product, Number(e.target.value))
                    );
                  }}
                  className='qty'
                  name='qty'
                >
                  <option value={item.qty}>{item.qty}</option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                </select>
                <button onClick={() => itemRemoveHandler(item.product)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            ))}
          </div>
          {cartItems.length !== 0 ? (
            <div className='grid-two'>
              <ul>
                <li>
                  <p className='subtotal'>
                    subtotal ({cartItems.length}) items
                  </p>
                  <br />
                </li>
                <li>
                  <p>
                    <span>&#x20B9; </span>
                    {cartItems
                      .reduce((acc, item) => acc + item.qty * item.price, 0)
                      .toFixed(2)}
                  </p>
                </li>
                <li>
                  <button onClick={checkoutHandler}>proceed to checkout</button>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
        </CartItems>
      )}
    </StyledCart>
  );
};

const StyledCart = styled.div`
  .title {
    width: 70%;
    margin: 2rem auto;
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

const CartItems = styled.div`
  min-height: 90vh;
  width: 70%;
  margin: 3rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, auto));
  grid-gap: 10rem;
  button {
    background: none;
    border: none;
  }
  .qty {
    border: none;
    outline: none;
    padding: 0.3rem 0.7rem;
    font-weight: 700;
    background: #f5f5f5;
    border-radius: 5px;
  }

  select option:first-child {
    display: none;
  }

  .grid-one {
    .card {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1rem;
      border-bottom: 2px solid #d8d8d8;
      img {
        width: 5rem;
        object-fit: cover;
        margin-bottom: 1rem;
      }
      .product-name {
        width: 50%;
      }
    }
  }
  .grid-two {
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
      }
      .subtotal {
        font-size: 1.2rem;
        font-weight: 500;
        text-transform: uppercase;
      }
    }
  }
`;

export default Cart;
