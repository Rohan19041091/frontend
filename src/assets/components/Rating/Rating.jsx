import React from "react";

const Rating = ({ value, ratingtext }) => {
  // Calculate the scaled value out of 5
  const scaledValue = (value / 2) ;

  // Generate stars based on the scaled value
  const renderStars = () => {
    const stars = [];
    const maxValue = 5; // Maximum number of stars
    const filledStars = Math.floor(scaledValue); // Number of filled stars
    const hasHalfStar = scaledValue % 1 !== 0; // Check if there is a half star

    // Render filled stars
    for (let i = 0; i < filledStars; i++) {
      stars.push(<span key={i} style={{ color: "yellow" }}>&#9733;</span>);
    }

    // Render half star if needed
    if (hasHalfStar) {
      stars.push(<span key={stars.length} style={{ color: "yellow" }}>&#9734;</span>);
    }

    // Render empty stars to fill up to 5
    for (let i = stars.length; i < maxValue; i++) {
      stars.push(<span key={i} style={{ color: "yellow" }}>&#9734;</span>);
    }

    return stars;
  };

  return (
    <div>
      <div className="value">{value}</div>
      <div>{ratingtext}</div>
      
      <div>
        {/* Render stars */}
        <div>{renderStars()}</div>
      </div>
    </div>
  );
};

export default Rating;
