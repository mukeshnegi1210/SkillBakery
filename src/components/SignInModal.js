import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faQuoteLeft,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Modal, Tabs, Tab } from "react-bootstrap";
import StarRatingBasic from "./StarRatingBasic";
function SignInModal({ handleClose, show }) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body>
        <button className="btn-close" type="button" onClick={handleClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="modal-body__banner">
          <img
            width="100"
            height="100"
            src="./images/svg/bxs_user.svg"
            alt="signin"
          />

          <h3>Welcome Back</h3>
          <p>Provide Your Login Credentials</p>
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
                id="loginConfirm"
              />
              <label className="form-check-label" for="loginConfirm">
                I accept the <a href="/">Terms of Service</a>
              </label>
            </div>
          </div>
          <div className="buttonsContainer">
            <button className="btn w-100 primary" type="submit" aria-label="submit">
              Log in
            </button>
            <span>
              I forgot my password.
              <button
                type="button"
                data-bs-target="#resetPasswordModal"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
                aria-label="open modal"
              >
                Reset
              </button>
            </span>
          </div>
          <button
            className="btn w-100 secondary"
            type="button"
            data-bs-target="#registerModal"
            data-bs-toggle="modal"
            data-bs-dismiss="modal"
            aria-label="open modal"
          >
            Create New Account
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default SignInModal;
