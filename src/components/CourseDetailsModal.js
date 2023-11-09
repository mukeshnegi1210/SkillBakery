import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faQuoteLeft,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Modal, Tabs, Tab, Accordion } from "react-bootstrap";
import StarRatingBasic from "./StarRatingBasic";
function CourseDetailsModal({ courseData, handleClose, show }) {
  const [curriculum, setCurriculum] = useState([]);

  const CourseDiscount = 20;

  useEffect(() => {
    fixData();
  }, []);
  const fixData = () => {
    const courseCurriculum = [];
    let currentChapter = null;
    courseData &&
      courseData.CourseCurriculum.forEach((item) => {
        if (item._class === "chapter") {
          currentChapter = {
            title: item.title,
            lectures: [],
          };
          courseCurriculum.push(currentChapter);
        } else if (currentChapter) {
          currentChapter.lectures.push(item);
        }
      });
    setCurriculum(courseCurriculum);
  };

  return (
    <Modal show={show} onHide={handleClose} className="coursePopup" centered>
      <Modal.Body>
        <button className="btn-close" type="button" onClick={handleClose}>
          <FontAwesomeIcon icon={faTimes} />
          <i className="fa fa-times"></i>
        </button>
        <div className="cousreDetails">
          <div className="cousreDetails__video">
            <video width="640" height="360" controls>
              <source src={courseData?.CourseIntroVideoURL} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="cousreDetails__mainInfo">
            <div className="title">
              <div className="info">
                <h3>{courseData?.CourseTitle}</h3>
                <div className="rate">
                  <div className="rate-stars">
                    {StarRatingBasic(courseData?.CourseRating)}
                  </div>
                  <span>{courseData?.CourseRating} (225)</span>
                </div>
              </div>

              <div className="lang">
                <button className="btn outline" aria-label="language">
                  <i className="fa fa-earth"></i>
                  <span>English</span>
                </button>
                <button className="btn primary" aria-label="category">
                  {courseData?.CourseCategory}
                </button>
              </div>
            </div>
            <div className="price align-items-center">
              <div className="india">
                {" "}
                <del>{(courseData?.CoursePrice * 80).toFixed(2)}₹ </del>
              </div>
              <div className="usa">
                <del>( {courseData?.CoursePrice}$)</del>
              </div>
              <div className="india">
                {(
                  (courseData?.CoursePrice -
                    (CourseDiscount / 100) * courseData?.CoursePrice) *
                  80
                ).toFixed(2)}
                ₹
              </div>
              <div className="usa">
                ({" "}
                {(
                  courseData?.CoursePrice -
                  (CourseDiscount / 100) * courseData?.CoursePrice
                ).toFixed(2)}
                $)
              </div>
              <span className="d-inline-block  btn green py-1 ml-3">
                {CourseDiscount}% off
              </span>
            </div>
            <div className="buyContainer">
              <div className="buy">
                <button className="btn green" aria-label="buy">
                  Buy now for ${courseData?.CoursePrice}
                </button>
                <button className="btn mint" aria-label="buy">
                  Buy now for ₹{(courseData?.CoursePrice * 83).toFixed(2)}
                </button>
              </div>
              <button className="cart btn outline" aria-label="cart">
                <i>
                  <FontAwesomeIcon icon={faCartShopping} />
                </i>
              </button>
            </div>
          </div>
          <div className="cousreDetails__subInfo">
            <Tabs
              defaultActiveKey="description"
              className="mb-3"
              id="uncontrolled-tab-example"
            >
              <Tab eventKey="description" title="Description:">
                {/* {courseData?.CourseDescription} */}
                <div
                  dangerouslySetInnerHTML={{
                    __html: courseData?.CourseDescription,
                  }}
                ></div>
              </Tab>
              <Tab eventKey="curriculum" title="Curriculum:">
                <h5 className="font-weight-bold mb-3 pt-4">Curriculum</h5>
                <Accordion
                  defaultActiveKey="0"
                  style={{ width: "90%" }}
                  className="curriculum-accordion"
                >
                  {curriculum &&
                    curriculum.map((item, index) => (
                      <Accordion.Item eventKey={index}>
                        <Accordion.Header>{item.title}</Accordion.Header>
                        <Accordion.Body>
                          {item.lectures.map((lecture) => (
                            <div
                              key={lecture?.id}
                              className="curriculum-box d-flex mt-2 rounded border shadow-sm p-2"
                            >
                              <div className="icon me-3">
                                <img
                                  src={"./images/svg/logo.svg"}
                                  // src={lecture?.asset?.thumbnail_url}
                                  alt="thumbnail"
                                  style={{ maxWidth: "100px" }}
                                  className="mr-3"
                                />
                              </div>
                              <div className="content flex-grow-1">
                                <div className="d-flex mb-2">
                                  <span className="btn secondary  py-0 px-3 h-auto font-small">
                                    {lecture?.asset?.asset_type}
                                  </span>
                                  {lecture?.is_free ? (
                                    <span className="btn green py-0 font-small px-2 ms-auto">
                                      Free
                                    </span>
                                  ) : (
                                    <span className="btn primary h-auto py-0 px-3 font-small ms-auto">
                                      Paid
                                    </span>
                                  )}
                                </div>
                                <p className="font-weight-bold">
                                  {lecture?.title}
                                </p>
                              </div>
                            </div>
                          ))}
                        </Accordion.Body>
                      </Accordion.Item>
                    ))}
                </Accordion>
              </Tab>
            </Tabs>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default CourseDetailsModal;
