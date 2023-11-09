import { useEffect, useState, Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import jsonData from "../../_library/courses.json";
import FeatureCourseCard from "../../components/FeatureCourseCard";
export default function OurCourses() {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState(-1);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const categoriesNames = [];
    jsonData &&
      jsonData.CoursesCollection &&
      jsonData.CoursesCollection.forEach((element) => {
        if (!categoriesNames.includes(element.CourseCategory)) {
          categoriesNames.push(element.CourseCategory);
        }
      });
    setCategories(categoriesNames);
  }, [data]);

  const getData = async () => {
    const data = (await jsonData) && jsonData.CoursesCollection;
    setData(data);
  };

  return (
    <section className="pb-115" id="ourCourse">
      <div className="container">
        <h2 className="section-head">Featured Courses</h2>
      </div>

      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        className="swipperTab controls col-11"
      >
        <SwiperSlide className="d-inline-block w-auto">
          <span
            className={`item control cursor-pointer ${
              activeTab === -1 ? "active" : ""
            }`}
            onClick={() => setActiveTab(-1)}
          >
            All
          </span>
        </SwiperSlide>
        {categories &&
          categories.map((item, index) => (
            <SwiperSlide
              className="d-inline-block w-auto"
              key={`${item}${index}`}
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
      <div className="container ">
        {/* all categories  */}
        {activeTab === -1 ? (
          <div className={`row g-4 feature-list`}>
            {data &&
              data.map((item, index) => (
                <FeatureCourseCard
                  key={index}
                  activeTab={activeTab === -1}
                  data={item}
                />
              ))}
          </div>
        ) : null}
      </div>

      {/* other filtered categories */}
      <div className="container">
        {categories &&
          categories.map((item, index) => (
            <Fragment key={`CategoriesMapKey${index}`}>
              {activeTab === index ? (
                <>
                  <div className={`row g-4 feature-list`} key={index}>
                    {data &&
                      data
                        .filter(
                          (categoryItem) =>
                            categoryItem?.CourseCategory === item
                        )
                        .map((item, index) => (
                          <FeatureCourseCard
                            key={index}
                            activeTab={activeTab === index}
                            data={item}
                          />
                        ))}
                  </div>
                </>
              ) : null}
            </Fragment>
          ))}
      </div>
    </section>
  );
}
