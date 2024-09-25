import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  return (
    <div className="mx-2 w-11/12 mt-4 px-2 py-4 bg-cream rounded shadow flex flex-col lg:flex-row justify-center items-center">
      
      <div className="flex-grow">
     
        <img className="w-32 h-32 mx-auto lg:w-64 lg:h-64" src={product.imageUrl} alt={product.name} />
        
      </div>
      <div>
      <h3 className="text-center text-blue text-xl mt-2">{product.name}</h3>
        <p className="text-center text-gray">Price: ₹{product.price}</p>
        <p className="text-center text-gray hidden">{product.description}</p>
      <Link to={`/product/${product.id}`} className="mt-auto">
        <button className="w-28 mt-2 h-10 bg-blue text-white rounded-md hover:bg-white hover:text-blue mx-auto block">
          View Detail
        </button>
      </Link>
      </div>
      
    </div>
  );
};

export default ProductItem;
