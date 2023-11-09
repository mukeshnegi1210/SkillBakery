import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export default function OwnPaceCard({ img, title, text }) {
  return (
    <>
      <div className="col-md-4 col-12 ownPeace__card">
        <div className="icon">
          <img src={img} alt="icon" />
        </div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      {/* <!-- End Card--> */}
    </>
  );
}
