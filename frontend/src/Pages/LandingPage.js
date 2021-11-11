import React, { useEffect } from "react";
import Product from "../Components/Product";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Actions/ProductActions";
import Spinner from "../Components/Spinner";

const LandingPage = () => {
  const dispatch = useDispatch();

  const { product, isLoading } = useSelector((state) => state.Product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [isLoading]);

  return (
    <Main>
      <h2>Latest Products</h2>
      {!isLoading ? (
        <Products>
          {product.map((item) => (
            <Product
              id={item._id}
              name={item.name}
              key={item._id}
              img={item.image}
              ratings={item.rating}
              review={item.numReviews}
              price={item.price}
            />
          ))}
        </Products>
      ) : (
        <Spinner />
      )}
    </Main>
  );
};

const Main = styled.div`
  width: 70%;
  min-height: 100vh;
  margin: auto;
  margin-top: 3rem;
`;

const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, auto));
`;

export default LandingPage;
