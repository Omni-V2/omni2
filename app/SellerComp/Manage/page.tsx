"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
interface Product {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
}

const Manage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([
        {
            id: 1,
            name: 'Product 1',
            price: 50.00,
            imageUrl: 'https://example.com/product1.jpg',
        },
        {
            id: 2,
            name: 'Product 2',
            price: 75.00,
            imageUrl: 'https://example.com/product2.jpg',
        },
        // Add more products as needed
    ]);
    const [editingProductId, setEditingProductId] = useState<number | null>(null);
    const [updatedPrice, setUpdatedPrice] = useState<string | null>(null);
    useEffect(() => {
        axios.get('http://localhost:3000/api/products', {
          params: {
            limit: 4,
          },
        })
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
      }, []);
    const handleUpdateClick = (productId: number) => {
        setEditingProductId(productId);
        setUpdatedPrice(products.find(product => product.id === productId)?.price.toString() || null);
    };

    const handleCancelUpdate = () => {
        setEditingProductId(null);
        setUpdatedPrice(null);
    };

    const handleSaveUpdate = (productId: number) => {
        // Update the product with the new price
        if (updatedPrice !== null) {
            setProducts((prevProducts) =>
                prevProducts.map((product) =>
                    product.id === productId ? { ...product, price: parseFloat(updatedPrice) } : product
                )
            );
        }
        setEditingProductId(null);
        setUpdatedPrice(null);
    };

    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-3xl font-semibold mb-4">Your Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {products.map((product) => (
                    <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
                        <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="w-full h-32 object-cover mb-4 rounded-md"
                        />
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                        {editingProductId === product.id ? (
                            <div>
                                <input
                                    type="text"
                                    placeholder="Enter new price"
                                    value={updatedPrice !== null ? updatedPrice : product.price.toString()}
                                    onChange={(e) => setUpdatedPrice(e.target.value)}
                                    className="form-input mt-2 block w-full border rounded-md"
                                />
                                <button
                                    className="bg-blue-500 text-white px-4 py-2 rounded mt-2 mr-2"
                                    onClick={() => handleSaveUpdate(product.id)}
                                >
                                    Save
                                </button>
                                <button
                                    className="bg-gray-300 text-gray-800 px-4 py-2 rounded mt-2"
                                    onClick={handleCancelUpdate}
                                >
                                    Cancel
                                </button>
                            </div>
                        ) : (
                            <div>
                                <p className="text-gray-600">${product.price.toFixed(2)}</p>
                                <p>{}</p>
                                <div className='flex justify-between'>
                                <button
                                    className="bg-red text-white px-4 py-2 rounded mt-2"
                                    onClick={() => handleUpdateClick(product.id)}
                                >
                                    Update
                                </button>
                                <button
                                    className="bg-transparent hover:bg-red text-red font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-red-800 rounded"
                                    onClick={() => handleUpdateClick(product.id)}
                                >
                                    delete
                                </button>
                                </div>
                            </div>
                        )}
                        {/* Add more product details or actions as needed */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Manage;
