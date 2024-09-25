import React, { useState, useEffect } from 'react';
import { getReviews, addReview } from '../../services/reviewService';
import Review from './Review';
import { useAuth } from '../../hooks/useAuth';

const ReviewList = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ rating: 5, text: '' });
  const [error, setError] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    fetchReviews();
  }, [productId]);

  const fetchReviews = async () => {
    try {
      const productReviews = await getReviews(productId);
      setReviews(productReviews);
    } catch (error) {
      setError("Error fetching reviews");
      console.error(error);
    }
  };

  const handleAddReview = async (e) => {
    e.preventDefault();
    if (!newReview.text.trim()) return; // Prevent empty review
    try {
      const reviewData = {
        ...newReview,
        userId: user.uid,
        authorName: user.displayName || 'Anonymous'
      };
      await addReview(productId, reviewData);
      setNewReview({ rating: 5, text: '' });
      fetchReviews();
    } catch (error) {
      setError("Error adding review");
      console.error(error);
    }
  };

  return (
    <div className='flex flex-col mt-10 '>

      <div className='flex flex-col justify-center items-center'>

      
      {user && (
        <form onSubmit={handleAddReview}>
          <div>
            <label className='text-blue font-bold'>Rating:</label>
            <select
              value={newReview.rating}
              onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
              >
              {[1, 2, 3, 4, 5].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
          <div className='mt-4 m-auto'>
            <textarea
              className='text-blue active:border-red-500 lg:w-96 lg:h-36 placeholder:text-center'
              value={newReview.text}
              onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
              placeholder="Write your review"
              />
          </div>
          <button className='w-32 mt-2 h-10 bg-blue text-white rounded-md hover:bg-white hover:text-blue mx-auto block' type="submit">Submit Review</button>
        </form>
      )}
      </div>
      {error && <p>{error}</p>}
      <h3 className='text-xl text-gray mt-4'>Product Reviews</h3>
      <div className='mt-4 flex flex-col gap-2'>

      {reviews.length > 0 ? (
        reviews.map(review => (
          <Review  key={review.id} review={review} />
        ))
      ) : (
        <p>No reviews yet. Be the first to review this product!</p>
      )}
      </div>
    </div>
  );
};

export default ReviewList;
