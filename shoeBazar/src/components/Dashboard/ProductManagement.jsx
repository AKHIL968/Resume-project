import React, { useState, useEffect } from "react";
import {
  getProducts,
  addProduct,
  deleteProduct,
} from "../../services/productService";
import { Link } from "react-router-dom";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
  });
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const fetchedProducts = await getProducts();
    setProducts(fetchedProducts);
  };

  const handleAddProduct = async (e) => {
    console.log("clicked");
    e.preventDefault();
    await addProduct(newProduct, imageFile);
    setNewProduct({ name: "", price: "", description: "", serialNo: "" });
    setImageFile(null);
    fetchProducts();
    // alert("product listed successfully")
    // console.log("clicked");
  };

  // const handleUpdateProduct = async (id, updatedData) => {
  //   await updateProduct(id, updatedData);
  //   fetchProducts();
  // };

  const handleDeleteProduct = async (id) => {
    try {
      await deleteProduct(id);
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  return (
    <div>
      <h2 className="text-3xl text-blue">Product Management</h2>
      <form onSubmit={handleAddProduct}>
        <div className="flex flex-col gap-4 justify-center items-center py-4 m-8">
          <div>
            <label className="text-gray text-lg">Product Name:</label> <br />
            <input
            className='w-64 h-10 p-2 rounded-lg'
              type="text"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
              placeholder="Product Name"
              required
            />
          </div>
          <div>
            <label className="text-gray text-lg">Price:</label> <br />
            <input
            className='w-64 h-10 p-2 rounded-lg'
              type="number"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
              placeholder="Price"
              required
            />
          </div>
          <div>
            <label className="text-gray text-lg">Product Serial No:</label> <br />
            <input
            className='w-64 h-10 p-2 rounded-lg'
              type="number"
              value={newProduct.serialNo}
              onChange={(e) =>
                setNewProduct({ ...newProduct, serialNo: e.target.value })
              }
              placeholder="product code"
              required
            />
          </div>
          <div>
            <label className="text-gray text-lg">Description:</label> <br />
            <textarea
            className='w-64 h-10 p-2 rounded-lg'
              value={newProduct.description}
              onChange={(e) =>
                setNewProduct({ ...newProduct, description: e.target.value })
              }
              placeholder="Description"
              required
            />
          </div>
          <div>
            <label className="text-gray text-lg">Image:</label> <br />
            <input className='w-64 h-10 p-2 rounded-lg' type="file" onChange={handleImageChange} accept="image/*" />
          </div>
          <button className="w-48 px-4 py-2 bg-blue text-cream hover:bg-white hover:text-blue rounded-md mt-4" type="submit">Add Product</button>
        </div>
      </form>
      <div className="grid grid-cols-2 lg:grid-cols-3  gap-8">

      {products.map((product) => (
        <div className="border rounded-lg p-2 flex flex-col  bg-cream justify-center items-center" key={product.id}>
          <div className="">

          <h3 className="text-blue font-bold">Item: <span className="text-gray font-light">{product.name}</span></h3>
          {/* <p>{product.serialNo}</p> */}
          <p className="text-blue font-bold">Price: <span className="text-gray font-light">₹{product.price}</span></p>
          <p className="text-blue font-bold">Serial No: <span className="text-gray font-light">{product.serialNo}</span></p>
          {/* <p>{product.description}</p> */}

          {product.imageUrl && (
            <img className="m-auto"
            src={product.imageUrl}
            alt={product.name}
            style={{ width: "100px" }}
            />
          )}
          </div>
          <div className="flex flex-col m-auto gap-2 mt-auto lg:flex-row">

          <Link to={`/update-product/${product.id}`}>
            <button className="bg-blue text-cream py-2 px-3 hover:bg-white hover:text-blue rounded-lg">Update</button>
          </Link>
          
          <button className="bg-red-500 text-cream py-2 px-3 hover:bg-white hover:text-blue rounded-lg" onClick={() => handleDeleteProduct(product.id)}>
            Delete
          </button>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default ProductManagement;
