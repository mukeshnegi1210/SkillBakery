import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
function TestimonialCard() {
  return (
    <div className="item">
      <FontAwesomeIcon icon={faQuoteLeft} className="icon text-white" />
      <p>
        “Taking development courses at this school was a real eye-opener for me.
        Now I am confidently working in the web industry and I am proud of the
        skills I have acquired thanks to these courses. I recommend it to
        anyone!”
      </p>
      <h3>Anna Karter</h3>
    </div>
  );
}

export default TestimonialCard;
