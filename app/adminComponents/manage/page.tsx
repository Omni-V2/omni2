// ProductList.tsx
"use client"
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import Cloudinary from "../cloudinary/page";
import AdminNavBar from "../adminNavBar/page";

interface Product {
  id: number;
  productName: string;
  rating: string;
  price: string;
  description: string;
  imageUrl: string[];
  categories: string[];
  size: string;
  colour: string;
  sales: string;
  available: string;
  UserId: number;
}

const ProductList: React.FC<{ id: number }> = ({ id }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState<Product>({
    id: 0,
    productName: "",
    rating: "",
    price: "",
    description: "",
    imageUrl: [],
    categories: [],
    size: "",
    colour: "",
    sales: "",
    available: "",
    UserId: 0,
  });
  const [showAddForm, setShowAddForm] = useState(false);

  const setImg = (imageUrl: string) => {
    setNewProduct({ ...newProduct, imageUrl: [...newProduct.imageUrl, imageUrl] });
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/products", newProduct);
      const response = await axios.get("http://localhost:3000/api/products");
      setProducts(response.data);
      setNewProduct({
        id: 0,
        productName: "",
        rating: "",
        price: "",
        description: "",
        imageUrl: [],
        categories: [],
        size: "",
        colour: "",
        sales: "",
        available: "",
        UserId: 0,
      });
      setShowAddForm(false);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  console.log(newProduct,"éé");

  return (
    <div className='flex flex-row'>
    <AdminNavBar/>
    <div className="container mx-auto p-4 flex flex-col items-center">
      <h1 className='m-0 py-4 text-4xl font-extrabold text-center text-gray-900 dark:text-black'>Product List</h1>
      <button
        className="bg-blue-500 text-black  justify-center text-1xl font-bold   border-2 border-black py-2 px-4 rounded-xl  p-4"
        onClick={() => setShowAddForm(!showAddForm)}
      >
        {showAddForm ? 'Hide Form' : 'Add Product'}
      </button>
      {showAddForm && (
        <form onSubmit={handleSubmit} className="mt-4">
          <input
            type="number"
            name="id"
            placeholder="Product ID"
            value={newProduct.id}
            onChange={handleInputChange}
            className="border p-2 mt-2"
          />
          <input
            type="text"
            name="productName"
            placeholder="Product Name"
            value={newProduct.productName}
            onChange={handleInputChange}
            className="border p-2 mt-2"
          />
            <input
          type="text"
          name="rating"
          placeholder="Product rating"
          value={newProduct.rating}
          onChange={handleInputChange}
          className="border p-2 mt-2"
        />
        <input
          type="text"
          name="price"
          placeholder="Product price"
          value={newProduct.price}
          onChange={handleInputChange}
          className="border p-2 mt-2"
        />
        <input
          type="text"
          name="description"
          placeholder="Product description"
          value={newProduct.description}
          onChange={handleInputChange}
          className="border p-2 mt-2"
        />
        <input
          type="text"
          name="sales"
          placeholder="Product sales"
          value={newProduct.sales}
          onChange={handleInputChange}
          className="border p-2 mt-2"

        />
        <input
          type="text"
          name="available"
          placeholder="Product availability"
          value={newProduct.available}
          onChange={handleInputChange}
          className="border p-2 mt-2"
        />
        <input
          type="text"
          name="categories"
          placeholder="Product categories"
          value={newProduct.categories}
          onChange={handleInputChange}
          className="border p-2 mt-2"
        />
        <input
          type="text"
          name="size"
          placeholder="Product size"
          value={newProduct.size}
          onChange={handleInputChange}
          className="border p-2 mt-2"
        />

        <input
          type="text"
          name="colour"
          placeholder="Product colour"
          value={newProduct.colour}
          onChange={handleInputChange}
          className="border p-2 mt-2"
        />
          <input
          type="number"
          name="UserId"
          placeholder="User Id"
          value={newProduct.UserId}
          onChange={handleInputChange}
          className="border p-2 mt-2"
        />
          <Cloudinary setImg={setImg} />
          <button
            type="submit"
            className="  border-2 border-black   text-black py-4 px-4 rounded mt-4 cursor-pointer"
          >
            Submit
          </button>
        </form>
      )}
      <table className='w-full m-2'>
        <thead>
          <tr  >
            <th  className='text-left font-semibold text-lg uppercase border-b border-gray-300 py-3 px-5' >ID</th>
            <th  className='text-left font-semibold text-lg uppercase border-b border-gray-300 py-3 px-5'>Name</th>
            <th  className='text-left font-semibold text-lg uppercase border-b border-gray-300 py-3 px-5'>Rating</th>
            <th  className='text-left font-semibold text-lg uppercase border-b border-gray-300 py-3 px-5'>Price</th>
            <th  className='text-left font-semibold text-lg uppercase border-b border-gray-300 py-3 px-5'>Description</th>
            <th  className='text-left font-semibold text-lg uppercase border-b border-gray-300 py-3 px-5'>Sales</th>
            <th  className='text-left font-semibold text-lg uppercase border-b border-gray-300 py-3 px-5'>Available</th>
            <th  className='text-left font-semibold text-lg uppercase border-b border-gray-300 py-3 px-5'>Categories</th>
            <th  className='text-left font-semibold text-lg uppercase border-b border-gray-300 py-3 px-5'>Size</th>
            <th  className='text-left font-semibold text-lg uppercase border-b border-gray-300 py-3 px-5'>Colour</th>
            <th  className='text-left font-semibold text-lg uppercase border-b border-gray-300 py-3 px-5'>User ID</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product,index) => (
            <tr className='hover:bg-gray-100' key={index}>
              <td className='text-base py-2 px-4'>{product.id}</td>
              <td className='text-base py-2 px-4'>{product.productName}</td>
              <td className='text-base py-2 px-4' >{product.rating}</td>
              <td className='text-base py-2 px-4'>{product.price}</td>
              <td className='text-base py-2 px-4'>{product.description}</td>
              <td className='text-base py-2 px-4'>{product.sales}</td>
              <td className='text-base py-2 px-4'>{product.available}</td>
              <td className='text-base py-2 px-4'>{product.categories}</td>
              <td className='text-base py-2 px-4'>{product.size}</td>
              <td className='text-base py-2 px-4' >{product.colour}</td>
              <td className='text-base py-2 px-4'>{product.UserId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default ProductList;
