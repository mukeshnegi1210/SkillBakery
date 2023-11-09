export default function WeAre() {
  return (
    <section className="studio pb-115" id="weAre">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 col-12 images-container">
            <img
              className="shape"
              width="100"
              height="100"
              src="./images/svg/shape.svg"
              alt="shape"
            />
            <img
              className="mac"
              width="100"
              height="100"
              src="./images/MacBook.webp"
              alt="macbook"
            />
          </div>
          <div className="col-lg-6 col-12">
            <div className="content">
              <div className="content__head">
                <h2 className="section-head">SkillBakery Studio</h2>
                <p>Subscribe to our Youtube Channel</p>
              </div>
              <div className="content__info">
                <p>
                  SkillBakery is one of the fastest growing online education
                  company. Our vision is to provide high quality education which
                  is affordable and accessible to everyone. We believe that
                  every one has their own way of learning and grasping things
                  and that's why we provide self-paced HD quality contents, so
                  you can learn what you love at your convinience.
                </p>
                <br />
                <p>
                  We currently offer courses in web development and will soon be
                  publishing new courses in other categories as well. We are
                  committed to bring courses on new topics and we try to release
                  one new course every month. So keep visiting us, you will
                  surely find something for yourself here.
                </p>
                <button className="btn primary" aria-label="Subscription">
                  Select Subscription
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
