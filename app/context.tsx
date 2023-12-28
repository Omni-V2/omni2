"use client"
import { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

interface Product {
  id:string,
  name:string
}
type ProductArray = Product[];
interface DataProviderProps {
  children: ReactNode;  
}

interface DataContextValue {
  oneProduct: { categories: string };
  setOneproduct: React.Dispatch<React.SetStateAction<{ categories: string }>>;
  products: ProductArray;
  cartList: any[]; 
  setCartList: React.Dispatch<React.SetStateAction<any[]>>;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  handleAddToChartBtn: (id: string, prod: Product) => void;
}

const DataContext = createContext<DataContextValue | undefined>(undefined);

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [oneProduct, setOneproduct] = useState<{ categories: string }>({ categories: "electronics" });
  const [products, setProducts] = useState<ProductArray>([]);
  const [cartList, setCartList] = useState<any[]>([]);
  const [quantity, setQuantity] = useState(1);

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

  const handleAddToChartBtn = (id: string, prod: Product) => {
    setCartList([...cartList, {
      UserId: id,
      product: prod,
      quantity: 1,
    }]);
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
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider, DataContext };
