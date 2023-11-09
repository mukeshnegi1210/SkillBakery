import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowRight,
  faClockFour,
  faFileVideo,
  faLaptopCode,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import YoutubeVideoModal from "./YoutubeVideoModal";

function YoutubeVideoCard(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const item = props.data;
  return (
    <>
      <div className="course">
        <div
          href="https://www.youtube.com/"
          target="_blank"
          className="course__image cursor-pointer"
          onClick={handleShow}
        >
          <img
            className="w-100"
            width="100"
            height="100"
            src={item?.videoThumbnail}
            alt="course image"
          />
        </div>
        <div>
          <h3>{item?.videoTitle}</h3>
        </div>
        <p>{item?.channelName}</p>
      </div>

      <YoutubeVideoModal
        videoUrl={item?.videoUrl}
        show={show}
        handleClose={handleClose}
      />
    </>
  );
}

export default YoutubeVideoCard;
