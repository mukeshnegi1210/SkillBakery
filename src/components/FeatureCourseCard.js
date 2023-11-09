import { useState, useEffect } from "react";
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
function FeatureCourseCard(props) {
  const [show, setShow] = useState(false);

  const item = props.data;
  const activeTab = props.data;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const CourseDiscount = 20;
  return (
    <>
      <div
        className={`col-lg-4 col-md-6 col-12 mix tab-animation ${
          activeTab ? "active" : ""
        }`}
      >
        <div className="feature">
          <div className="feature__head">
            <img
              className="w-100"
              width="100"
              height="100"
              src={item?.CourseImageURL200H}
              alt="course image"
            />
            <span>By: {item?.CoursePublisher}</span>
          </div>
          <div className="feature__body">
            <div className="feature-price">
              <div className="category">{item?.CourseCategory}</div>
              <div className="price">
                <div className="india">
                  <del>{(item?.CoursePrice * 83).toFixed(2)}₹</del>
                </div>
                <div className="usa">
                  <del>({item?.CoursePrice}$)</del>
                </div>
                <span className="d-inline-block  btn green py-1 ml-3 px-2">
                  {CourseDiscount}% off
                </span>
              </div>
              <div className="price">
                <div className="india">
                  {(
                    (item?.CoursePrice -
                      (CourseDiscount / 100) * item?.CoursePrice) *
                    80
                  ).toFixed(2)}
                  ₹
                </div>
                <div className="usa">
                  (
                  {(
                    item?.CoursePrice -
                    (CourseDiscount / 100) * item?.CoursePrice
                  ).toFixed(2)}
                  $)
                </div>
              </div>
            </div>
            <div className="feature-title">
              <h3>{item?.CourseTitle}</h3>
              <p>
                {item?.CourseDescription.replace(/<(.|\n)*?>/g, "").slice(
                  0,
                  75
                )}
                {item?.CourseDescription.length > 75 ? "..." : null}
              </p>
            </div>
            <div className="feature-info">
              <div className="lessons">
                <i>
                  <FontAwesomeIcon icon={faFileVideo} />
                </i>
                <span>{item?.CourseCurriculum.length} Lessons</span>
              </div>
              <div className="hours">
                <i>
                  <FontAwesomeIcon icon={faClockFour} />
                </i>

                <span>{Math.round(item?.ContentLengthInMins / 60)} hours</span>
              </div>
              <div className="students1">
                <i>
                  <FontAwesomeIcon icon={faLaptopCode} />
                </i>
                <span>15 Students</span>
              </div>
            </div>
            <div className="feature-rate">
              <div className="rate">
                {StarRatingBasic(item?.CourseRating)}

                <span>4.5 (225)</span>
              </div>
              <div className="buttons">
                <button className="buy" aria-label="buy course">
                  <i>
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </i>
                </button>
                <button
                  className="details-btn"
                  type="button"
                  onClick={handleShow}
                >
                  <span>Details</span>
                  <i>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {show ? (
        <CourseDetailsModal
          courseData={item}
          show={show}
          handleClose={handleClose}
          handleShow={handleShow}
        />
      ) : null}
    </>
  );
}

export default FeatureCourseCard;
