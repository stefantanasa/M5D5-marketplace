import React from "react"
import StarRatings from "react-star-ratings"

export default function Review({ review }) {
  return (
    <div className="my-3 border p-3">
      <StarRatings
        rating={review.rate}
        numberOfStars={5}
        starDimension="15px"
        starSpacing="2px"
        starRatedColor="#ffd700"
        starEmptyColor="grey"
        disabled={false}
      />
      <div>{review.comment}</div>
    </div>
  )
}
