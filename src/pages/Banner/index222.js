import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import jsonData from "../../_library/courses.json";
import BannerSliderCard from "../../components/BannerSliderCard";
import BannerSliderThumb from "../../components/BannerSliderThumb";
import { useSwiper } from "swiper/react";
import { faL } from "@fortawesome/free-solid-svg-icons";

export default function Banner() {
  let timer;
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
    const pointerUpEvent = new Event("pointerup", {
      bubbles: true,
      cancelable: true,
    });

    // event.currentTarget.doubleclick();
    event.currentTarget.dispatchEvent(pointerUpEvent);

    // timer = setTimeout(() => {
    //   setHovered(true);
    //   setHoveredId(id);
    // }, 5000);

    // scrollToCard(event.currentTarget);
  };

  const onMouseRemoveHandler = () => {
    clearInterval(timer);
    setHovered(false);
    setHoveredId(null);
  };

  const scrollToCard = (e) => {
    const windowWidth = window.innerWidth;
    const cardRect = e.getBoundingClientRect();
    const container = document.getElementsByClassName(
      "banner-thumbs-slider"
    )[0];

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

  return (
    <div className="banner-section">
      {/* {console.log("thumbsSwiper", thumbsSwiper)} */}

      <Swiper
        slidesPerView={1}
        className="banner-carousel"
        modules={[Thumbs]}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        onSwiper={setThumbsSwiper}
      >
        {data &&
          data.map((item) => (
            <SwiperSlide key={item?.CourseId}>
              <BannerSliderCard
                item={item}
                hovered={hovered}
                hoveredId={hoveredId}
              />
            </SwiperSlide>
          ))}
      </Swiper>

      <Swiper
        slidesPerView={1.2}
        modules={[Thumbs]}
        spaceBetween={20}
        // watchSlidesProgress
        onSwiper={setThumbsSwiper}
        className="banner-thumbs-slider"
        breakpoints={{
          640: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1.8,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 40,
            freeMode: true,
          },
        }}
      >
        {data &&
          data.map((item) => (
            <SwiperSlide
              onMouseEnter={(e) => onMouseEnterHandler(e, item?.CourseId)}
              onMouseLeave={() => onMouseRemoveHandler()}
              key={item?.CourseId}
              ref={elementRef}
            >
              <BannerSliderThumb item={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
