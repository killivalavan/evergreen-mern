import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "./Spinner";
import { login } from "../Actions/UserActions";
import styled from "styled-components";
import { useLocation, useHistory } from "react-router";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();
  const { loading, error, userInfo } = useSelector((state) => state.UserLogin);

  const location = useLocation();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, history, redirect]);

  //Submit hconst andler
  const submitHandler = (e) => {
    dispatch(login(email, password));
    e.preventDefault();
  };

  return (
    <StyledLogin>
      <div className="title">SIGN IN</div>
      {error && <div>{error}</div>}
      {loading && <Spinner />}
      <form onSubmit={submitHandler} action="">
        <div className="email">
          <label htmlFor="email">Email Address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
            // value={email}
            placeholder="Enter email"
          />
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
            // value={password}
            placeholder="Enter password"
          />
        </div>
        <button type="submit">SIGN IN</button>
        <p>
          New Customer?
          <Link to={redirect ? `/register?redirect=${redirect}` : `/register`}>
            {" "}
            <span>Register</span>
          </Link>
        </p>
      </form>
    </StyledLogin>
  );
};

const StyledLogin = styled.div`
  position: absolute;
  width: 25%;
  left: 50%;
  transform: translateX(-50%);
  .title {
    margin: 4rem 0rem 1.5rem 0rem;
    font-size: 1.5rem;
    font-weight: 600;
    opacity: 0.7;
  }

  form {
    label {
      font-size: 0.8rem;
      font-weight: 500;
      display: block;
      margin: 1rem 0rem 0.3rem 0rem;
    }
    input {
      width: 100%;
      background: #f0f0f0;
      border: none;
      padding: 0.7rem 1rem;
    }
    button {
      padding: 0.7rem;
      margin: 1rem 0rem 1rem 0rem;
      background: black;
      color: white;
      border: none;
      font-size: 0.7rem;
    }
    p {
      font-size: 0.8rem;
      span {
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export default LoginScreen;
