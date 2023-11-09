import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStar2 } from "@fortawesome/free-regular-svg-icons";
import {
  faStar,
  faStarHalf,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";

export const StarRatingBasic = (selectedStars, color) => {
  const totalStars = 5;
  return [...Array(totalStars)].map((el, i) =>
    i < selectedStars ? (
      <FontAwesomeIcon
        icon={faStar}
        className={`${color === "white" ? "text-white" : "text-blue"}`}
      />
    ) : (
      <FontAwesomeIcon
        icon={faStar2}
        className={`${color === "white" ? "text-white" : "text-blue"}`}
      />
    )
  );
};

export default StarRatingBasic;
