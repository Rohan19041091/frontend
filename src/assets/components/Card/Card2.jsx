import React from "react";
import Rating from "../Rating/Rating";
import "./Card.css"; // Import CSS file for Card styling

const Card2 = ({ heading, text, title, value, ratingtext }) => {
  return (
    <div className="card2">
      <p>4</p>
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
          <p>
            <strong>{heading}</strong>
            {text}
          </p>
        </div>
        <div>
          <h4>{title}</h4>
          <div className="list">
            <ul><span className="span">9.8</span> Building Responsive</ul>
            <ul><span  className="span">8.9</span> Cool</ul>
            <ul><span  className="span">8.9</span> Docs</ul>
          </div>
          <div>
            <h4>Why we love it</h4>
            <ul>
              <ul>
                <input type="checkbox" id="documentation" name="documentation" />
                <label htmlFor="documentation">Documentation</label>
              </ul>
              <ul>
                <input type="checkbox" id="easyUse" name="easyUse" />
                <label htmlFor="easyUse">Easy Use</label>
              </ul>
              <ul>
                <input type="checkbox" id="outOfBox" name="outOfBox" />
                <label htmlFor="outOfBox">Out of Box</label>
              </ul>
            </ul>
          </div>
          <button className="btn2"> Show more &or;</button>
        </div>
      </div>
      <div className="rating">
        {/* Rating Component */}
        <Rating value={value} ratingtext={ratingtext} />
      </div>
      {/* Button */}
      <button className="btn1">View</button>
    </div>
  );
};

export default Card2;
