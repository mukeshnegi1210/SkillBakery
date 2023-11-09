import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faQuoteLeft,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Modal, Tabs, Tab } from "react-bootstrap";
import StarRatingBasic from "./StarRatingBasic";
function YoutubeVideoModal({ videoUrl, handleClose, show }) {
  return (
    <Modal show={show} onHide={handleClose} className="coursePopup" centered>
      <Modal.Body>
        <button className="btn-close" type="button" onClick={handleClose}>
          <FontAwesomeIcon icon={faTimes} />
          <i className="fa fa-times"></i>
        </button>
        <div className="cousreDetails">
          <div className="cousreDetails__video">
            <iframe
              className="yotube-video"
              src={videoUrl}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default YoutubeVideoModal;
