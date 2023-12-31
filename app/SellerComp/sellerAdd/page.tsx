"use client"
import React, { useState, useEffect, ChangeEvent, FormEvent,useContext } from "react";
import axios from "axios";
import Cloudinary from "@/app/adminComponents/cloudinary/page";
import { DataContext } from '../../context';



interface Product {
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
  
const test = () => {
  const {user, setUserId }:any=  useContext(DataContext)
    const [products, setProducts] = useState<Product[]>([]);
    const [newProduct, setNewProduct] = useState<Product>({
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
      UserId: user.id,
    });
    

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        try {
          await axios.post("http://localhost:3000/api/products", newProduct);
          const response = await axios.get("http://localhost:3000/api/products");
          setProducts(response.data);
          setNewProduct({
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
            UserId:0,
          });
          
        } catch (error) {
          console.error("Error adding product:", error);
        }
      };

    const setImg = (imageUrl: string) => {
        setNewProduct({ ...newProduct, imageUrl: [...newProduct.imageUrl, imageUrl] });
      };
      const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setNewProduct({ ...newProduct, [name]: value });
      };
    
    return ( 
        <div className=" mt-[120px] bg-gray-100 flex items-center justify-center">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-3xl font-extrabold text-center text-gray-900 dark:text-black mb-8">Add Product</h1>
          <div className="flex gap-4">
            <input className="border rounded p-2" type="text" name="productName" onChange={handleInputChange} placeholder="Product Name" />
            <input className="border rounded p-2" type="text" name="rating" onChange={handleInputChange} placeholder="Rating" />
            <input className="border rounded p-2" type="number" name="price" onChange={handleInputChange} placeholder="Price" />
            <input className="border rounded p-2" type="text" name="description" onChange={handleInputChange} placeholder="Description" />
          </div>
          <div className="flex gap-4 mt-4">
            <input className="border rounded p-2" type="text" name="size" onChange={handleInputChange} placeholder="Size" />
            <input className="border rounded p-2" type="text" name="colour" onChange={handleInputChange} placeholder="Colour" />
            <input className="border rounded p-2" type="text" name="sales" onChange={handleInputChange} placeholder="Sales" />
            <input className="border rounded p-2" type="text" name="available" onChange={handleInputChange} placeholder="Available" />
            
          </div>
          <div className="flex gap-4 mt-4">
          <Cloudinary setImg={setImg} />
          </div>
          <div>
          <button className="bg-red text-white font-bold py-2 px-4 rounded mt-4 ml-[450px]" type="submit" onClick={handleSubmit}>Add</button>

          </div>
        </div>
      </div>
     );
}
 
export default test;