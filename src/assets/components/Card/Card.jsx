import React from "react";
import Rating from "../Rating/Rating";
import "./Card.css"; // Import CSS file for Card styling

const Card = ({ title, text, text2, value, ratingtext, heading,number }) => {
  return (
    <div className="card">
        <p>{number}</p>
      <div className="image">
        {/* Image */}
        <img
          src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__"
          alt="Card Image"
        />
      </div>
      <div className="text">
        {/* Text */}
        <div>
          <p><strong>{heading}</strong>{text}</p>
        </div>
        <div>
          <h4>{title}</h4>
          <p className="tx">{text2}</p>
        </div>
        {/* Show more with down arrow */}
        
        <button className="btn2"> Show more &or;</button>
     
      </div>
      <div className="rating">
        {/* Rating Component */}
        <Rating value={value} ratingtext={ratingtext} />
      </div>
      {/* Button */}
      <button className="btn">View</button>
    </div>
  );
};

export default Card;
