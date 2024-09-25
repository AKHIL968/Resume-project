import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById, updateProduct } from '../../services/productService';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({ name: '', price: '', description: '' });

  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = await getProductById(id);
      setProduct(fetchedProduct);
    };
    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProduct(id, product);
    navigate('/admin/product');
  };

  return (
    <div>
      <h2 className='text-3xl text-blue mt-4'>Update Product</h2>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col gap-4 justify-center items-center py-4 m-8'>
        <div>
        <label className="text-gray text-lg">Product Name:</label> <br />
        <input
         className='w-64 h-10 p-2 rounded-lg'
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Product Name"
          required
          />
          </div>
          <div>
          <label className="text-gray text-lg">Price:</label> <br />
        <input
         className='w-64 h-10 p-2 rounded-lg'
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Price"
          required
          />
          </div>
          <div>
          <label className="text-gray text-lg">Description:</label> <br />
        <textarea
         className='w-64 h-10 p-2 rounded-lg'
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Description"
          required
          />
          </div>
        <button  className='w-48 px-4 py-2 bg-blue text-cream hover:bg-white hover:text-blue rounded-md mt-4' type="submit">Update Product</button>
          </div>
      </form>
    </div>
  );
};

export default ProductDetail;