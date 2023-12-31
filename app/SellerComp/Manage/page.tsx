// "use client"
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { log } from 'console';
// interface Product {
//     id:number,
//     productName: string;
//     rating:number;
//     price:number;
//     description:string;
//     imageUrl:any;
//     categories:any;
//     size:string;
//     color:string;
//     sales:number;
//     available:string;
//     UserId:number;
//     createdAt:any;
//     updatedAt:any;
//   }

// const Manage: React.FC = () => {
//     const [products, setProducts] = useState<Product[]>([]);
//     const [editingProductId, setEditingProductId] = useState<number | null>(null);
//     const [updatedPrice, setUpdatedPrice] = useState<string | null>(null);
//     const [update, setUpdate] = useState({ 
//         price: "",
//         available: ""
//       });
//       const [refresh,setRefresh]=useState<Boolean>(false)
//     useEffect(() => {
//         axios.get(`http://localhost:3000/api/producs/user/4`).then(response=>setProducts(response.data)
//         ) .catch ((error)=>
//             console.error("Error fetching products:", error)
//        )
//       }, [refresh]);
//       console.log("myprods",update);
//       const handleUpdateChange = (event) => {
//         const { name, value } = event.target;
//         setUpdate({ ...update, [name]: value });
//       };

//     const handleUpdateClick = (productId: number) => {
//         setEditingProductId(productId);
//         setUpdatedPrice(products.find(product => product.id === productId)?.price.toString() || null);
//     };

//     const handleCancelUpdate = () => {
//         setEditingProductId(null);
//         setUpdatedPrice(null);
//     };

//     const handleSaveUpdate = (event,productId: number) => {
//         event.preventDefault();
//         axios.put(`http://localhost:3000/api/products/${productId}`,update).then((ress)=>{
//            setRefresh(!refresh)
//         }).catch((err)=>{
//           console.error(err)
//         })
//         if (updatedPrice !== null) {
//             setProducts((prevProducts) =>
//                 prevProducts.map((product) =>
//                     product.id === productId ? { ...product, price: parseFloat(updatedPrice) } : product
//                 )
//             );
//         }
//         setEditingProductId(null);
//         setUpdatedPrice(null);
//     };

//     return (
//         <div className="container mx-auto mt-8">
//             <h2 className="text-3xl font-semibold mb-4">Your Products</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//                 {products.map((product) => (
//                     <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
//                         <img
//                             src={product.imageUrl}
//                             alt={product.name}
//                             className="w-full h-32 object-cover mb-4 rounded-md"
//                         />
//                         <h3 className="text-lg font-semibold">{product.productName}</h3>
//                         {editingProductId === product.id ? (
//                             <div>
//                                 <input
//                                     type="text"
//                                     name="price"
//                                     placeholder="Product price"
//                                     value={update.price}
//                                     onChange={handleUpdateChange}
//                                     className="form-input mt-2 block w-full border rounded-md"
//                                 />
//                                  <input
//                                   type="text"
//                                   name="available"
//                                   placeholder="available"
//                                   value={update.available}
//                                   onChange={handleUpdateChange}
//                                   className="form-input mt-2 block w-full border rounded-md"
//                                 />
//                                 <button
//                                     className="bg-gray-300 text-gray-800 px-4 py-2 rounded mt-2 mr-8"
//                                     onClick={(e) => handleSaveUpdate(e,product.id)}
//                                 >
//                                     Save
//                                 </button>
//                                 <button
//                                     className="bg-gray-300 text-gray-800 px-4 py-2 rounded mt-2"
//                                     onClick={handleCancelUpdate}
//                                 >
//                                     Cancel
//                                 </button>
//                             </div>
//                         ) : (
//                             <div>
//                                 <p className="text-gray-600">${product.price.toFixed(2)}</p>
//                                 <p className={product.available === "in stock" ? "text-green" : "text-red"}>
//                                     {product.available}
//                                 </p>
//                                 <div className='flex justify-between'>
//                                 <button
//                                     className="bg-red text-white px-4 py-2 rounded mt-2"
//                                     onClick={() => handleUpdateClick(product.id)}
//                                 >
//                                     Update
//                                 </button>
//                                 <button
//                                     className="bg-transparent hover:bg-red text-red font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-red-800 rounded"
//                                     onClick={() => handleUpdateClick(product.id)}
//                                 >
//                                     delete
//                                 </button>
//                                 </div>
//                             </div>
//                         )}
//                         {/* Add more product details or actions as needed */}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Manage;
// ... (existing imports)
"use client"
import React, { useEffect, useState,useContext } from 'react';
import axios from 'axios';
import { DataContext } from '../../context';
// ... (existing interfaces)

const DeleteConfirmationPopup: React.FC<{
  onConfirm: () => void;
  onCancel: () => void;
}> = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-md">
        <p>Are you sure you want to delete this item?</p>
        <div className="mt-4 flex justify-end">
          <button className="bg-red text-white px-4 py-2 rounded mr-2" onClick={onConfirm}>
            Confirm
          </button>
          <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
interface Product {
        id:number,
        productName: string;
        rating:number;
        price:number;
        description:string;
        imageUrl:any;
        categories:any;
        size:string;
        color:string;
        sales:number;
        available:string;
        UserId:number;
        createdAt:any;
        updatedAt:any;
      }
const Manage: React.FC = () => {
    const {user, setUserId }:any=  useContext(DataContext)
    console.log('myidd',user);
    
  const [products, setProducts] = useState<Product[]>([]);
  const [editingProductId, setEditingProductId] = useState<number | null>(null);
  const [updatedPrice, setUpdatedPrice] = useState<string | null>(null);
  const [update, setUpdate] = useState({
    price: "",
    available: "",
  });
  const [refresh, setRefresh] = useState<Boolean>(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState<boolean>(false);
  const [deletingProductId, setDeletingProductId] = useState<number | null>(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/producs/user/${user.id}`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, [refresh]);

  const handleUpdateChange = (event) => {
    const { name, value } = event.target;
    setUpdate({ ...update, [name]: value });
  };

  const handleUpdateClick = (productId: number) => {
    setEditingProductId(productId);
    setUpdatedPrice(products.find((product) => product.id === productId)?.price.toString() || null);
  };

  const handleCancelUpdate = () => {
    setEditingProductId(null);
    setUpdatedPrice(null);
  };

  const handleSaveUpdate = (event, productId: number) => {
    event.preventDefault();
    axios
      .put(`http://localhost:3000/api/products/${productId}`, update)
      .then((ress) => {
        setRefresh(!refresh);
      })
      .catch((err) => {
        console.error(err);
      });
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

  const handleDeleteClick = (productId: number) => {
    setDeletingProductId(productId);
    setShowDeleteConfirmation(true);
  };

  const handleConfirmDelete = () => {
    if (deletingProductId !== null) {
      axios
        .delete(`http://localhost:3000/api/products/${deletingProductId}`)
        .then(() => {
          setRefresh(!refresh);
        })
        .catch((err) => {
          console.error(err);
        });
    }

    // Close the confirmation popup
    setShowDeleteConfirmation(false);
  };

  const handleCancelDelete = () => {
    // Cancel the delete operation
    setShowDeleteConfirmation(false);
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
            <h3 className="text-lg font-semibold">{product.productName}</h3>
            {editingProductId === product.id ? (
              <div>
                <input
                  type="text"
                  name="price"
                  placeholder="Product price"
                  value={update.price}
                  onChange={handleUpdateChange}
                  className="form-input mt-2 block w-full border rounded-md"
                />
                <input
                  type="text"
                  name="available"
                  placeholder="available"
                  value={update.available}
                  onChange={handleUpdateChange}
                  className="form-input mt-2 block w-full border rounded-md"
                />
                <button
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded mt-2 mr-8"
                  onClick={(e) => handleSaveUpdate(e, product.id)}
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
                <p className={product.available === "in stock" ? "text-green" : "text-red"}>
                  {product.available}
                </p>
                <div className="flex justify-between">
                  <button
                    className="bg-red text-white px-4 py-2 rounded mt-2"
                    onClick={() => handleDeleteClick(product.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-transparent hover:bg-red text-red font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-red-800 rounded"
                    onClick={() => handleUpdateClick(product.id)}
                  >
                    update
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Show delete confirmation popup if needed */}
      {showDeleteConfirmation && (
        <DeleteConfirmationPopup onConfirm={handleConfirmDelete} onCancel={handleCancelDelete} />
      )}
    </div>
  );
};

export default Manage;
