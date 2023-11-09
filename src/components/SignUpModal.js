import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faQuoteLeft,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Modal, Tabs, Tab } from "react-bootstrap";
import StarRatingBasic from "./StarRatingBasic";
function SignUpModal({ handleClose, show }) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body>
        <button className="btn-close" type="button" onClick={handleClose}>
          <FontAwesomeIcon icon={faTimes} />
          <i className="fa fa-times"></i>
        </button>
        <div className="modal-body__banner">
          <img
            width="100"
            height="100"
            src="./images/svg/signup.svg"
            alt="signup"
          />

          <h3>Sign up</h3>
          <p>Join Us Today!</p>
        </div>
        <form className="modal-body__form">
          <div className="inputsContainer">
            <div className="group-control">
              <input
                className="form-control"
                type="email"
                autocomplete="off"
                placeholder="E-mail"
              />
            </div>
            <div className="group-control">
              <input
                className="form-control"
                type="text"
                autocomplete="off"
                placeholder="Full Name"
              />
            </div>
            <div className="group-control">
              <input
                className="form-control"
                type="password"
                autocomplete="off"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="forget">
            <div className="form-check fit">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="registerConfirm"
              />
              <label className="form-check-label" for="registerConfirm">
                I accept the <a href="/">Terms of Service</a>
              </label>
            </div>
          </div>
          <div className="buttonsContainer">
            <button className="btn w-100 primary" type="submit" aria-label="submit">
              Sign up
            </button>
            <span>
              Already have an account?
              <button
                type="button"
                data-bs-target="#loginModal"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
                aria-label="open modal"
              >
                Login
              </button>
            </span>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default SignUpModal;
