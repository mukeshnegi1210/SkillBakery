import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowRight,
  faClockFour,
  faFileVideo,
  faLaptopCode,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import StarRatingBasic from "./StarRatingBasic";
import CourseDetailsModal from "./CourseDetailsModal";
import CartDetailsModal from "./CartDetailsModal";
function BannerSliderThumb({ item }) {
  const [show, setShow] = useState(false);
  const [showCart, setShowCart] = useState(false);

  // handle course details modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // handle cart modal

  const handleCartClose = () => setShowCart(false);
  const handleCartShow = () => setShowCart(true);

  return (
    <>
      <div className="banner-thumbs-slider-card" key={item?.CourseId}>
        <img
          className="d-block w-100"
          src={item?.CourseImageURL200H}
          alt="banner"
        />
        <div className="top">
          <h4>By: {item?.CoursePublisher}</h4>
          <p>
            {" "}
            {item?.CoursePrice !== 0 ? (
              <span>${item?.CoursePrice}</span>
            ) : (
              "Free"
            )}
          </p>
        </div>
        <div className="bottom">
          <h3> {item?.CourseTitle}</h3>
          <div className="control flex-wrap">
            <div className="rate my-1">
              <div className="rate-stars d-flex align-items-center">
                {StarRatingBasic(item?.CourseRating, "white")}
              </div>
              <span>{item?.CourseRating} (225)</span>
            </div>
            <div className="buttons">
              <button className="buy" onClick={handleCartShow}>
                <i>
                  <FontAwesomeIcon icon={faShoppingCart} />
                </i>
              </button>
              <a className="details-btn" type="button" onClick={handleShow}>
                <span>Details</span>
                <i>
                  <FontAwesomeIcon icon={faArrowRight} />
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {show ? (
        <CourseDetailsModal
          courseData={item}
          show={show}
          handleClose={handleClose}
        />
      ) : null}

      <CartDetailsModal show={showCart} handleClose={handleCartClose} />
    </>
  );
}

export default BannerSliderThumb;
