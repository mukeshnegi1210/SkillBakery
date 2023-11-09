import React from "react";
export default function Contact() {
  return (
    <section className="pb-115" id="contact">
      <div className="container">
        <div className="contact-form">
          <div className="content">
            <h2>Stay informed</h2>
            <p>
              Be the first to receive notifications about new courses and
              promotions
            </p>
            <form>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <input className="form-control" type="email" placeholder="E-mail" />
              </div>
              <div className="form-group">
                <button
                  className="btn primary"
                  type="submit"
                  aria-label="contact us"
                >
                  Subcsribe
                </button>
              </div>
            </form>
            <span>
              By continuing, you agree to our
              <a href="#">Privacy Policy</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
