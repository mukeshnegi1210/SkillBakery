function SubscriptionCard({ title, inrPrice, usdPrice, discount }) {
  return (
    <div className="subscription__card">
      <div className="subscription__head">
        <div className="price">
          <div className="price__now">
            <span className="india">
              ₹{inrPrice - (discount / 100) * inrPrice}{" "}
            </span>
            <span className="usa">
              (${usdPrice - (discount / 100) * usdPrice} )
            </span>
          </div>
          <div className="price__before">
            <p>
              ₹{inrPrice} (${usdPrice})
            </p>
          </div>
          <p className="discount">-{discount}%</p>
        </div>
      </div>
      <h3>{title}</h3>
      <div className="buttons-container">
        <button className="btn green" aria-label="buy">
          Subscribe Now for 12 Months at ${usdPrice * 12}
        </button>
        <button className="btn mint">
          Subscribe Now for 12 Months at ₹{inrPrice * 12}
        </button>
      </div>
    </div>
  );
}

export default SubscriptionCard;
