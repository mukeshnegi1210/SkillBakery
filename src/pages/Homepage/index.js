import React from "react";
import useHomepage from "./useHomepage";
// import { Dropdown, Carousel } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { routes } from "../../routes/routes";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper";

// Import Swiper styles
// import "swiper/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faEnvelope,
  faPhone,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../../layouts/Header";
import Subscription from "../Subscription";
import OwnPace from "../OwnPace";
import Contact from "../Contact";
import Footer from "../../layouts/Footer";
import WeAre from "../WeAre";
import Testimonials from "../Testimonials";
import Banner from "../Banner";
import YoutubeContent from "../YoutubeContent";
import OurCourses from "../OurCourses";

export default function Homepage() {
  const {} = useHomepage();
  return (
    <div className="homepage-wrapper">
      <video id="background-video" autoPlay loop muted>
        <source src="./images/giphy.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* header  starts*/}
      <Header />
      {/* header  ends*/}

      <main>
        <Banner />
        {/* Subscription starts */}
        <Subscription />
        {/* Subscription ends */}

        {/* Own Peace starts */}
        {/* <OwnPace /> */}
        {/* Own Peace ends */}

        <OurCourses />

        {/* testimonials starts */}
        <Testimonials />
        {/* testimonials ends */}

        {/* we are starts */}
        <WeAre />
        {/* we are ends */}

        {/* <YoutubeContent /> */}

        <Contact />
        <Footer />
      </main>
    </div>
  );
}
