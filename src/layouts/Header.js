import { useEffect, useState, useRef } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faEnvelope,
  faMagnifyingGlass,
  faPhone,
  faPhoneAlt,
  faShoppingCart,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import SignInModal from "../components/SignInModal";
import SignUpModal from "../components/SignUpModal";
import CartDetailsModal from "../components/CartDetailsModal";
import dataJson from "../_library/courses.json";
import CourseDetailsModal from "../components/CourseDetailsModal";
function Header() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showCourseInfoModal, setShowCourseInfoModal] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [courseData, setCourseData] = useState(null);

  const targetRef = useRef(null);
  const searchInputRef = useRef(null);

  // handle sign in modal
  const handleSignInClose = () => setShowSignIn(false);
  const handleSignInShow = () => setShowSignIn(true);

  // handle sign up modal

  const handleSignUpClose = () => setShowSignUp(false);
  const handleSignUpShow = () => setShowSignUp(true);

  // handle search info modal
  const handleCartClose = () => setShowCart(false);

  const handleCartShow = () => setShowCart(true);

  // course information modal
  const handleCourseInfoModalClose = () => {
    setShowCourseInfoModal(false);
    setCourseData(null);
    searchInputRef.current.value = "";
  };
  const handleCourseInfoModalShow = () => setShowCourseInfoModal(true);

  const searchHandler = async (e) => {
    const value = e.target.value;
    if (value.length > 3) {
      setIsSearch(true);
      const res =
        dataJson &&
        dataJson?.CoursesCollection &&
        dataJson?.CoursesCollection.filter((item) =>
          item?.CourseTitle.toLowerCase()?.includes(value)
        );

      setSearchData(res);
    }
  };

  const handleSearchClick = (data) => {
    if (data) {
      handleCourseInfoModalShow();
      setCourseData(data);
    }
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (targetRef.current && !targetRef.current.contains(event.target)) {
        setIsSearch(false);
        searchInputRef.current.value = "";
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header>
        {/* <!-- ========== HEADING ==========--> */}
        <Navbar expand="lg" className="" variant="light">
          <div className="nav-top">
            <Container>
              <div className="nav-container">
                <div className="logo">
                  <img
                    width="155"
                    height="48"
                    src="./images/svg/logo.svg"
                    alt="logo"
                  />
                </div>

                <Navbar.Toggle aria-controls="navbarSupportedContent" />
                <div className="nav-container desktop">
                  <ul className="nav-list">
                    <li className="nav-link">
                      <a className="item-link" href="/">
                        All Courses
                      </a>
                    </li>
                    <li className="nav-link">
                      <a className="item-link" href="/">
                        Free
                      </a>
                    </li>
                    <li className="nav-link">
                      <a className="item-link" href="/">
                        Web Development
                      </a>
                    </li>
                    <li className="nav-link">
                      <a className="item-link" href="/">
                        App
                      </a>
                    </li>
                    <li className="nav-link">
                      <a className="item-link" href="/">
                        Popular
                      </a>
                    </li>
                  </ul>
                  <div className="search position-relative">
                    <form>
                      <input
                        type="search"
                        placeholder="Search"
                        id="searchInput"
                        ref={searchInputRef}
                        autoComplete="off"
                        onChange={(e) => {
                          searchHandler(e);
                        }}
                      />
                      {!isSearch ? (
                        <span type="submit" aria-label="submit">
                          <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </span>
                      ) : null}
                    </form>
                    {isSearch ? (
                      <>
                        {searchData && searchData.length ? (
                          <>
                            <ul
                              ref={targetRef}
                              style={{ top: "100%", left: 0 }}
                              className="position-absolute list-group cursor-pointer w-100 bg-white search-result"
                            >
                              {searchData &&
                                searchData.map((item) => (
                                  <li
                                    key={item?.id}
                                    className="list-group-item"
                                    onClick={() => handleSearchClick(item)}
                                  >
                                    {item?.CourseTitle}
                                  </li>
                                ))}
                            </ul>
                          </>
                        ) : null}
                      </>
                    ) : null}
                  </div>
                  <div className="buttons-container">
                    <button
                      className="buy circle"
                      type="button"
                      onClick={handleCartShow}
                    >
                      <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
                    <button
                      className="user circle"
                      type="button"
                      onClick={handleSignInShow}
                    >
                      <FontAwesomeIcon icon={faUser} />
                    </button>
                    <button
                      className="btn primary"
                      type="button"
                      onClick={handleSignUpShow}
                    >
                      Sign up
                    </button>
                  </div>
                </div>

                <Navbar.Collapse id="navbarSupportedContent">
                  <div className="navContent">
                    <ul className="nav-list">
                      <li className="nav-link">
                        <a className="item-link" href="/">
                          All Courses
                        </a>
                      </li>
                      <li className="nav-link">
                        <a className="item-link" href="/">
                          Free
                        </a>
                      </li>
                      <li className="nav-link">
                        <a className="item-link" href="/">
                          Web Development
                        </a>
                      </li>
                      <li className="nav-link">
                        <a className="item-link" href="/">
                          App
                        </a>
                      </li>
                      <li className="nav-link">
                        <a className="item-link" href="/">
                          Popular
                        </a>
                      </li>
                    </ul>
                    <div className="search position-relative">
                      <form>
                        <input
                          type="search"
                          placeholder="Search"
                          id="searchInput"
                          ref={searchInputRef}
                          autoComplete="off"
                          onChange={(e) => {
                            searchHandler(e);
                          }}
                        />
                        {!isSearch ? (
                          <span type="submit" aria-label="submit">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                          </span>
                        ) : null}
                      </form>
                      {isSearch ? (
                        <>
                          {searchData && searchData.length ? (
                            <>
                              <ul
                                ref={targetRef}
                                style={{ top: "100%", left: 0 }}
                                className="position-absolute list-group cursor-pointer w-100 bg-white search-result"
                              >
                                {searchData &&
                                  searchData.map((item) => (
                                    <li
                                      key={item?.id}
                                      className="list-group-item"
                                      onClick={() => handleSearchClick(item)}
                                    >
                                      {item?.CourseTitle}
                                    </li>
                                  ))}
                              </ul>
                            </>
                          ) : null}
                        </>
                      ) : null}
                    </div>
                    <div className="buttons-container">
                      <button
                        className="buy circle"
                        type="button"
                        onClick={handleCartShow}
                      >
                        <FontAwesomeIcon icon={faShoppingCart} />
                      </button>
                      <button
                        className="user circle"
                        type="button"
                        onClick={handleSignInShow}
                      >
                        <FontAwesomeIcon icon={faUser} />
                      </button>
                    </div>
                  </div>
                  <div className="closeNav">
                    <Navbar.Toggle className="border-0">
                      <FontAwesomeIcon className="text-white" icon={faTimes} />
                    </Navbar.Toggle>
                  </div>
                </Navbar.Collapse>
              </div>
            </Container>
          </div>

          <div className="nav-bottom">
            <div className="container">
              <div className="nav-container">
                <ul className="nav-list">
                  <li className="nav-link">
                    <a className="item-link" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-link">
                    <a className="item-link" href="#ourCourse">
                      Our Courses
                    </a>
                  </li>
                  <li className="nav-link">
                    <a className="item-link" href="#reviews">
                      Reviews
                    </a>
                  </li>
                  <li className="nav-link">
                    <a className="item-link" href="#weAre">
                      Who we are
                    </a>
                  </li>
                  <li className="nav-link">
                    <a href="https://blog.skillbakery.com/">Blog</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Navbar>
      </header>

      <SignInModal show={showSignIn} handleClose={handleSignInClose} />
      <SignUpModal show={showSignUp} handleClose={handleSignUpClose} />
      <CartDetailsModal show={showCart} handleClose={handleCartClose} />

      {courseData ? (
        <CourseDetailsModal
          courseData={courseData}
          show={showCourseInfoModal}
          handleClose={handleCourseInfoModalClose}
        />
      ) : null}
    </>
  );
}

export default Header;
