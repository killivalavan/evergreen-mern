import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as farFaStar } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";

const Rating = ({ rating, review }) => {
  // Get Stars
  const getStars = () => {
    const stars = [];
    const ratings = Math.floor(rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= ratings) {
        stars.push(
          <FontAwesomeIcon
            key={i}
            className='star'
            icon={faStar}
          ></FontAwesomeIcon>
        );
      } else if (i >= ratings) {
        stars.push(
          <FontAwesomeIcon
            key={i}
            className='star'
            icon={farFaStar}
          ></FontAwesomeIcon>
        );
      } else {
        stars.push(
          <FontAwesomeIcon
            key={i}
            className='star'
            icon={faStarHalfAlt}
          ></FontAwesomeIcon>
        );
      }
    }
    return stars;
  };

  return (
    <StyledRating>
      <h5>
        <span> {getStars()} </span>
        {review} reviews
      </h5>
    </StyledRating>
  );
};

const StyledRating = styled.div`
  margin: 0.5rem 0rem;
  h5 {
    font-weight: 500;
  }

  span {
    color: #f8e825;
  }
`;

export default Rating;
