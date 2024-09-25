// src/pages/ProductPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/product/ProductDetail';

const ProductPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1 className='text-blue text-center text-2xl'>Product Detail</h1>
      <ProductDetail productId={id} />
    </div>
  );
};

export default ProductPage;
