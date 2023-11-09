import SubscriptionCard from "../../components/SubscriptionCard";
export default function Subscription() {
  const data = [
    {
      title: "Subscribe to a 12-month subscription with a discount",
      inrPrice: 7500,
      usdPrice: 80,
      discount: 20,
    },
    {
      title: "Subscribe to a 12-month subscription with a discount",
      inrPrice: 8000,
      usdPrice: 80,
      discount: 25,
    },
  ];

  return (
    <section className="subscription pb-115">
      <div className="container">
        <h2 className="section-head">Subscription</h2>
        <p className="text-center">
          Provides access to all the courses on our platform
        </p>
        <div className="row g-4">
          {/* <!-- Start Card--> */}

          {data &&
            data?.map((item, index) => (
              <div className="col-lg-6 col-12" key={index}>
                <SubscriptionCard
                  
                  title={item?.title}
                  inrPrice={item?.inrPrice}
                  usdPrice={item?.usdPrice}
                  discount={item?.discount}
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
