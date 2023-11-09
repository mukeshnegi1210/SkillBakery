import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faEnvelope,
  faPhone,
  faPhoneAlt,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import jsonData from "../../_library/courses.json";
import YoutubeVideoCard from "../../components/YoutubeVideoCard";
export default function YoutubeContent() {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  const intitialData = [
    {
      id: 1,
      categoryTitle: "PICO CSS",
      videoThumbnail:
        "https://i.ytimg.com/vi/7gC56SP9n8A/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD5nCHBEeXG5W5i7k_l7NNrKW9hxQ",
      videoUrl: "https://www.youtube.com/embed/7gC56SP9n8A?si=UnUIv4wPTIjEGMxR",
      videoTitle:
        "Web Developers : Learn to create Nav bars, breadcrumbs and more using PICO CSS",
      channelName: "SkillBakery Studio",
    },
    {
      id: 2,
      categoryTitle: "PICO CSS",
      videoThumbnail:
        "https://i.ytimg.com/vi/B7Fn0k_fPxU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA4yWC06b95LoaZbzx7Cjq6Bo1hMg",
      videoUrl: "https://www.youtube.com/embed/B7Fn0k_fPxU?si=9i80_81V6gjhGQIc",
      videoTitle:
        "Web Developers : Create Accordion, Modal and Tooltip in minutes using PICO CSS      ",
      channelName: "SkillBakery Studio",
    },
    {
      id: 3,
      categoryTitle: "Javascript",
      videoThumbnail:
        "https://i.ytimg.com/vi/DyVGlhsbLOY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBvGNyMClPhwxZB2dCO6l_o66pArQ",
      videoUrl: "https://www.youtube.com/embed/DyVGlhsbLOY?si=G_oikFLc5pJebFx4",
      videoTitle: "Web Developers : Introducing Visibility API in JavaScript",
      channelName: "SkillBakery Studio",
    },
    {
      id: 4,
      categoryTitle: "Javascript",
      videoThumbnail:
        "https://i.ytimg.com/vi/G_fTU-4lbA4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCYxJRexv9ODdwNxmjgz501f3Ii5Q",
      videoUrl: "https://www.youtube.com/embed/G_fTU-4lbA4?si=GhlQ-5gEE6tpyvFH",
      videoTitle: "Web Developers : Custom Notifications in JavaScript",
      channelName: "SkillBakery Studio",
    },
    {
      id: 5,
      categoryTitle: "C#",
      videoThumbnail:
        "https://i.ytimg.com/vi/X0CzdJNBqdk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCSMiYevAjk1izoAwLmdPQ1X6EocQ",
      videoUrl: "https://www.youtube.com/embed/X0CzdJNBqdk?si=L0-jWVFYAH-ZM3wn",
      videoTitle:
        "C# Developers : Exploring the Fascinating History of C# and .NET Framework",
      channelName: "SkillBakery Studio",
    },
    {
      id: 6,
      categoryTitle: "C#",
      videoThumbnail:
        "https://i.ytimg.com/vi/TEy5-xCK1Rg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDGk4qSVDwl33mge3U22VmOQNc9EQ",
      videoUrl: "https://www.youtube.com/embed/TEy5-xCK1Rg?si=k1SU09yJYCSLNdDr",
      videoTitle:
        "C# Developers : Mastering Minimal APIs in ASP.NET Core 6: Caching and API Versioning Unleashed!      ",
      channelName: "SkillBakery Studio",
    },
  ];

  useEffect(() => {
    setData(intitialData);
  }, []);

  useEffect(() => {
    const categoriesNames = [];
    intitialData &&
      intitialData.forEach((element) => {
        if (!categoriesNames.includes(element.categoryTitle)) {
          categoriesNames.push(element.categoryTitle);
        }
      });
    setCategories(categoriesNames);
  }, [data]);

  return (
    <section className="pb-83">
      <div className="container">
        <h2 className="section-head">Learn with Pleasure</h2>
      </div>

      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        className="swipperTab controls col-11"
      >
        {categories &&
          categories.map((item, index) => (
            <SwiperSlide
              className="d-inline-block w-auto"
              key={`YoutubeCategories${index}`}
            >
              <span
                className={`item control cursor-pointer ${
                  activeTab === index ? "active" : ""
                }`}
                onClick={() => setActiveTab(index)}
              >
                {item}
              </span>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* other filtered categories */}
      {categories &&
        categories.map((item, index) => (
          <div className="container">
            {activeTab === index ? (
              <>
                <div className="row g-5 courses-list" key={item?.id}>
                  <div className="col-12">
                    <div className="skillbakery-badge">
                      <div className="skillbakery-badge__info">
                        <img
                          width="100"
                          height="100"
                          src="./images/icon.webp"
                          alt="logo icon"
                        />
                        <div className="info">
                          <h3>Skillbakery Studio in YouTube</h3>
                          <p>3.22K subscribers</p>
                        </div>
                      </div>
                      <button className="subscribe" aria-label="subscribe">
                        <i className="fab fa-youtube"></i>
                        <span>Subscribe</span>
                      </button>
                    </div>
                  </div>

                  {data &&
                    data
                      .filter(
                        (categoryItem) => categoryItem?.categoryTitle === item
                      )
                      .map((item) => (
                        <div
                          key={`youtubeVideosList${item?.id}`}
                          className={`col-lg-4 col-md-6 col-12 mix tab-animation
                        ${activeTab === index ? "active" : ""}     
                       `}
                        >
                          <YoutubeVideoCard data={item} />
                        </div>
                      ))}
                </div>
              </>
            ) : null}
          </div>
        ))}
    </section>
  );
}
