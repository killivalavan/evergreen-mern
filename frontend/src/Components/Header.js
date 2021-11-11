import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Nav>
      <div className='items'>
        <Link className='logo' to='/'>
          EverGreen
        </Link>
        <ul>
          <li>
            <Link to='/cart'>Cart</Link>
          </li>
          <li>
            <Link to='/signup'>Sign Up</Link>
          </li>
        </ul>
      </div>
    </Nav>
  );
};

const Nav = styled.div`
  background: var(--green);
  font-weight: 600;
  padding: 0rem 2rem;
  .items {
    min-height: 10vh;
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  ul {
    display: flex;
    li {
      justify-content: space-evenly;
      padding-left: 5rem;
    }
  }
  a {
    color: white;
  }
`;

export default Header;
