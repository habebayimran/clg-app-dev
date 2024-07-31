import React, { useState } from 'react';
import './Reviews.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([
    { id: 1, name: 'John Doe', review: 'Great instructor! Very knowledgeable and helpful.' },
    { id: 2, name: 'Jane Doe', review: 'I loved the class! The instructor was very patient and made sure everyone understood the material.' },
    { id: 3, name: 'Bob Smith', review: 'The class was okay, but the instructor could have been more engaging.' },
    { id: 4, name: 'Alice Johnson', review: 'Wonderful experience! The yoga sessions were relaxing and the atmosphere was calming.' },
    { id: 5, name: 'Michael Brown', review: 'The facilities were top-notch and the instructors were very professional.' },
    { id: 6, name: 'Emily Davis', review: 'Amazing classes with a lot of variety. I feel much more flexible and energized.' },
    { id: 7, name: 'Chris Lee', review: 'A bit too advanced for my level, but the instructor was helpful and adjusted the poses for me.' },
    { id: 8, name: 'Jessica Wilson', review: 'The ambiance and overall experience were great. I would definitely recommend this to my friends.' },
  ]);

  const [showReviews, setShowReviews] = useState(false);

  const handleShowReviews = () => {
    setShowReviews(true);
  };

  const handleHideReviews = () => {
    setShowReviews(false);
  };

  return (
    <div className="review-page">
      <div className="admin-info">
        <h1>Admin Dashboard</h1>
        <p>Welcome to the admin panel of the Yoga Academy. Here, you can review the feedback from our students. Click the button below to view all the reviews left by our participants. Use this valuable feedback to enhance our classes and services.</p>
      </div>
      <button className={`see-reviews-btn ${showReviews ? 'hidden' : ''}`} onClick={handleShowReviews}>
        See Reviews
      </button>
      {showReviews && (
        <div className="reviews-popup">
          <div className="reviews-header">
            <h2>Student Reviews</h2>
            <button className="close-btn" onClick={handleHideReviews}>
              Close
            </button>
          </div>
          <div className="reviews-container">
            {reviews.map((review) => (
              <div key={review.id} className="review-card">
                <h3>{review.name}</h3>
                <p>{review.review}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviews;
