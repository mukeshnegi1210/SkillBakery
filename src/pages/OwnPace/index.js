import React from "react";
import OwnPaceCard from "../../components/OwnPaceCard";
export default function OwnPace() {
  const data = [
    {
      title: "Flexible study",
      content: "Learn at your own pace, anytime, anywhere",
      img: "./images/svg/icon-park-solid_time.svg",
    },
    {
      title: "Study Upon Payment",
      content: "Instant access to your chosen courses",
      img: "./images/svg/ooui_arrow-next-ltr.svg",
    },
    {
      title: "Completion certificate",
      content: "Get recognized for your course achievements",
      img: "./images/svg/fontisto_dollar.svg",
    },
  ];
  return (
    <section className="ownPeace pb-115">
      <div className="container">
        <h2 className="section-head">Study at your own pace</h2>
        <div className="row g-4">
          {data &&
            data?.map((item, index) => (
              <OwnPaceCard
                key={index}
                img={item?.img}
                title={item?.title}
                text={item?.content}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
