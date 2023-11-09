import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "react-bootstrap";
import CartItem from "./CartItem";
function CartDetailsModal({ courseData, handleClose, show }) {
  return (
    <Modal show={show} onHide={handleClose} className="cartPopup" centered>
      <Modal.Body>
        <button className="btn-close" type="button" onClick={handleClose}>
          <FontAwesomeIcon icon={faTimes} />
          <i className="fa fa-times"></i>
        </button>
        <div className="modal-body__head">
          <h3>
            <div className="icon">
              <i>
                <FontAwesomeIcon icon={faCheck} />
              </i>
            </div>
            <span>Added to your cart</span>
          </h3>
          <p>2 courses</p>
        </div>
        <div className="modal-body__info">
          <CartItem />
          <CartItem />
        </div>
        <div className="modal-body__footer">
          <button className="btn secondary" aria-label="add more">
            Add more courses
          </button>
          <div className="buttonsContainer">
            <button className="btn green" aria-label="buy">
              Buy for $67
            </button>
            <button className="btn mint" aria-label="buy">
              Buy for ₹5.556
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default CartDetailsModal;
