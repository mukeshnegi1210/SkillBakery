import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faLaptopCode,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import SignUpModal from "./SignUpModal";
function BannerSliderCard({ item, hovered, hoveredId }) {
  const [showSignUp, setShowSignUp] = useState(false);
  // handle sign up modal

  const handleSignUpClose = () => setShowSignUp(false);
  const handleSignUpShow = () => setShowSignUp(true);
  return (
    <>
      <div className="banner-carousel-card">
        <img
          className="d-block w-100"
          src={item?.CourseImageURL200H}
          alt="banner"
        />
        {hovered && hoveredId === item?.CourseId ? (
          <div className="video-container">
            <video autoPlay muted>
              <source
                // src={item?.CourseIntroVideoURL}
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        ) : null}
        <div className="carousel-caption">
          <div className="caption-head">
            <h3>{item?.CourseTitle}</h3>
            <p>Get our amazing courses on Udemy at great discounts</p>
          </div>
          <div className="caption-tags">
            <div className="tag">
              <i className="far fa-laptop-code">
                <FontAwesomeIcon icon={faLaptopCode} />
              </i>
              <span>41,304+ happy students</span>
            </div>
            <div className="tag">
              <i className="far fa-book">
                <FontAwesomeIcon icon={faBook} />
              </i>
              <span>30+ courses</span>
            </div>
            <div className="tag">
              <i className="far fa-thumbs-up">
                <FontAwesomeIcon icon={faThumbsUp} />
              </i>
              <span>1,990+ reviews</span>
            </div>
          </div>
          <button
            className="btn primary"
            type="button"
            onClick={handleSignUpShow}
          >
            Sign up
          </button>
        </div>
      </div>

      <SignUpModal show={showSignUp} handleClose={handleSignUpClose} />
    </>
  );
}

export default BannerSliderCard;
