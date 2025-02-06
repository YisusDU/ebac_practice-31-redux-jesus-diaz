import axios from "axios";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

type FetchProductState = {
  products: Product[];
  error: string | null;
  isLoading: boolean;
};

const useFetchProducts = () => {
  const [productState, setProductState] = useState<FetchProductState>({
    products: [],
    error: null,
    isLoading: true,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const productData = response.data.map((product: any) => ({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
        }));
        setProductState({
          products: productData,
          error: null,
          isLoading: false,
        });
      } catch (error) {
        setProductState({
          products: [],
          error: error.message,
          isLoading: false,
        });
      }
    };
    fetchProducts();
  }, []);

  return productState;
};

export default useFetchProducts;
