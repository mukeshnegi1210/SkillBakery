import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";

import TestimonialCard from "../../components/TestimonialCard";

export default function Testimonials() {
  return (
    <section className="testimonials pb-115" id="reviews">
      <div className="container">
        <h2 className="section-head">
          What students say
          <span className="paper">
            <img
              width="100"
              height="100"
              src="./images/svg/paper.svg"
              alt="paper"
            />
          </span>
          <span className="line">
            <img
              width="100"
              height="100"
              src="./images/svg/line.svg"
              alt="line"
            />
          </span>
        </h2>
        <p className="text-center">The path to success in development</p>
      </div>
      <div className="px-4">
        <Swiper
          breakpoints={{
            567: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide className="testimonial-card">
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide className="testimonial-card">
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide className="testimonial-card">
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide className="testimonial-card">
            <TestimonialCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
