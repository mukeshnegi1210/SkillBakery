import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClockFour,
  faFileVideo,
  faLaptopCode,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

export default function CartItem({ img, title, text }) {
  return (
    <div className="course">
      <div className="course__image">
        <img
          className="w-100"
          width="100"
          height="100"
          src="https://via.placeholder.com/350x150"
          alt="course image"
        />
      </div>
      <div className="course__info">
        <div className="base-info">
          <h3>Progressive Web Apps using React</h3>
          <div className="sub-info">
            <div className="lessons">
              <i>
                <FontAwesomeIcon icon={faFileVideo} />
              </i>
              <span>10 Lessons</span>
            </div>
            <div className="hours">
              <i>
                <FontAwesomeIcon icon={faClockFour} />
              </i>

              <span>10 hours</span>
            </div>
            <div className="students1">
              <i>
                <FontAwesomeIcon icon={faLaptopCode} />
              </i>
              <span>15 Students</span>
            </div>
          </div>
        </div>
        <div className="control">
          <div className="price">
            <div className="india">5556.20₹</div>
            <div className="usa">(67$)</div>
          </div>
          <button aria-label="remove">
            <i className="fa fa-trash">
              <FontAwesomeIcon icon={faTrash} />
            </i>
          </button>
        </div>
      </div>
    </div>
  );
}
