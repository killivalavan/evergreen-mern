import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faShoppingCart,
  faUserAlt,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { NavDropdown } from "react-bootstrap";
import { logout } from "../Actions/UserActions";

const Header = () => {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.UserLogin);

  const logoutHandler = () => {
    dispatch(logout());
  };

  const dropdownHandler = () => {};

  return (
    <Nav>
      <div className="items">
        <Link className="link logo" to="/">
          EverGreen
        </Link>
        <ul>
          <li>
            <Link className="link" to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} /> Cart
            </Link>
          </li>
          {userInfo ? (
            <li>
              <NavDropdown
                onClick={dropdownHandler}
                title={userInfo.name}
                className="link"
              >
                <NavDropdown.Item>
                  <FontAwesomeIcon icon={faUserAlt} />
                  <Link to="/profile"> Profile</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <FontAwesomeIcon icon={faSignOutAlt} />

                  <a onClick={logoutHandler}> Logout</a>
                </NavDropdown.Item>
              </NavDropdown>
            </li>
          ) : (
            <li>
              <Link className="link" to="/login">
                <FontAwesomeIcon icon={faUser} /> Sign Up
              </Link>
            </li>
          )}
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
    align-items: center;
    li {
      justify-content: space-evenly;
      padding-left: 5rem;
    }
  }
  .link {
    color: white;
  }
  .nav-link {
    color: white;
  }
`;

export default Header;
