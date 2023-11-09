import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import jsonData from "../../_library/courses.json";
import BannerSliderCard from "../../components/BannerSliderCard";
import BannerSliderThumb from "../../components/BannerSliderThumb";

const Banner = () => {
  let timer;
  const baseUrl =
    "https://s3.amazonaws.com/static.neostack.com/img/react-slick";
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [hovered, setHovered] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);
  const elementRef = useRef(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = (await jsonData) && jsonData.CoursesCollection;
    setData(data && data.slice(0, 5));
  };

  const onMouseEnterHandler = (event, id) => {
    event.currentTarget.click();

    timer = setTimeout(() => {
      setHovered(true);
      setHoveredId(id);
    }, 5000);

    scrollToCard(event.currentTarget);
  };

  const onMouseRemoveHandler = () => {
    clearInterval(timer);
    setHovered(false);
    setHoveredId(null);
  };

  const scrollToCard = (e) => {
    const windowWidth = window.innerWidth;
    const cardRect = e.getBoundingClientRect();
    const container = document.getElementsByClassName("slick-dots")[0];

    if (cardRect.x < 100) {
      container.scrollBy({ left: -cardRect.width, behavior: "smooth" });
    }

    if (windowWidth < cardRect.right) {
      container.scrollBy({
        top: 0,
        left: cardRect.right - windowWidth + 100,
        behavior: "smooth",
      });
    }
  };

  const settings = {
    customPaging: function (i) {
      return (
        <div
          onMouseEnter={(e) => onMouseEnterHandler(e, data[i].CourseId)}
          onMouseLeave={() => onMouseRemoveHandler()}
        >
          <BannerSliderThumb
            item={data[i]}
            key={`Bannerthumb${data[i].CourseId}`}
          />
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="banner-section">
      <h2>Custom Paging</h2>
      <Slider {...settings}>
        {data &&
          data.map((item) => (
            <div key={item?.CourseId}>
              <BannerSliderCard
                item={item}
                hovered={hovered}
                hoveredId={hoveredId}
              />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Banner;
