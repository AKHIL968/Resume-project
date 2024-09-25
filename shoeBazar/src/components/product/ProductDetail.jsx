import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/productService";
import { useCart } from "../../hooks/useCart";
import ReviewList from "../Reviews/ReviewList";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Product Added To Cart");
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    const fetchedProduct = await getProductById(id);
    setProduct(fetchedProduct);
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div>

    
    <div className="flex flex-col lg:flex-row">
      <div>
        <img
          className="bg-cream rounded-md shadow-sm"
          src={product.imageUrl}
          alt={product.name}
        />
      </div>
      <div className="flex flex-col justify-center items-center m-auto">
        <h2 className="text-center text-gray text-xl lg:text-5xl">{product.name}</h2>

        <p className="text-gray text-center">
          <span className="text-blue font-bold lg:text-2xl">Description:</span>{" "}
          {product.description}
        </p>
        <p className="text-gray text-center lg:text-2xl">
          {" "}
          <span className="text-blue font-bold">Price: </span>₹{product.price}
        </p>
        <button
          className="w-28 mt-2 h-10 bg-blue text-white rounded-md hover:bg-white hover:text-blue mx-auto block"
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
        <p className="mt-2 text-blue"><Link to="/refund">Refund Policy</Link></p>
      </div>
    </div>
      <ToastContainer />
      <ReviewList productId={id} />
      </div>
  );
};

export default ProductDetail;
