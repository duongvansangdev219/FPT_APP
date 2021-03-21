import React,{createContext,useEffect,useState} from 'react';
import axios from 'axios';

const ProductsContext= createContext();

const ProductsContextProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {   
        async function ProductsData() {
            const url = 'https://tranducbo.herokuapp.com';
            const resp = await axios.get(`${url}/products`);
            // console.log(resp.data);
            setProducts(resp.data);
          }
          ProductsData();
    }, [])
    return (    
        <ProductsContext.Provider value={products}>
        {children}
        </ProductsContext.Provider>
    )
}

export {ProductsContextProvider, ProductsContext};
