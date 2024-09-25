import React from 'react';
// import { deleteReview } from '../../services/reviewService';
const Review = ({ review }) => {
//   const handleDelete = async () => {
//     try {
//       await deleteReview(review.id); // Call the deleteReview function with the review ID
//       onDelete(review.id); // Notify parent component to update the UI
//     } catch (error) {
//       console.error('Error deleting review:', error);
//     }
//   };
  return (
    <div className="border rounded-lg p-2">
      
      <div>
      <p>{review.text}</p>
      </div>
      <div className='flex gap-4'>
      <p>Rating: {review.rating} / 5</p>
      <span>|</span>
      <p>By: {review.authorName || 'Anonymous'}</p>

      </div>
      {/* <button 
        onClick={handleDelete} 
        className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700">
        Delete
      </button> */}
    </div>
  );
};

export default Review;
