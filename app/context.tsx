"use client"
import { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

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
interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  address: string;
  firstName: string;
  lastName: string;
  role: string;
}
type ProductArray = Product[];
interface DataProviderProps {
  children: ReactNode;  
}

interface DataContextValue {
  oneProduct: Product;
  setOneproduct: React.Dispatch<React.SetStateAction<{}>>;
  products: ProductArray;
  cartList: any[]; 
  setCartList: React.Dispatch<React.SetStateAction<any[]>>;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  handleAddToChartBtn: (id: string, prod: Product) => void;
  userId: number | null;
  setUserId: React.Dispatch<React.SetStateAction<number | null>>;
}

const DataContext = createContext<DataContextValue | undefined>(undefined);

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [oneProduct, setOneproduct] = useState<Product>({});
  const [products, setProducts] = useState<ProductArray>([]);
  const [cartList, setCartList] = useState<any[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [userId, setUserId] = useState<number | null>(null)
  const [user,setUser]=useState<User>({})
  const [getAllData, setGetAllData] = useState<Boolean>(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (getAllData) {
         
          const allProductsResponse = await axios.get('http://localhost:3000/api/productss');
          setProducts(allProductsResponse.data);
        } else {
        
          const limitedProductsResponse = await axios.get('http://localhost:3000/api/products', {
            params: {
              limit: 4,
            },
          });
          setProducts(limitedProductsResponse.data);
        }

        
        const userResponse = await axios.get(`http://localhost:3000/api/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setUser(userResponse.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    fetchData();
  }, [userId, getAllData]);

  const handleAddToChartBtn = (id: string, prod: Product) => {
    setCartList([...cartList, {
      UserId: id,
      product: prod,
      quantity: 1,
    }]);
    console.log(prod,"cartlisttt")
  };

  const value: DataContextValue = {
    oneProduct,
    setOneproduct,
    products,
    cartList,
    setCartList,
    quantity,
    setQuantity,
    handleAddToChartBtn,
    userId,
    setUserId,
    user,
    setGetAllData,
    getAllData
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider, DataContext };
