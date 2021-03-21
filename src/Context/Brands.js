import React,{createContext,useEffect,useState} from 'react';
import axios from 'axios';

const BrandContext= createContext();

const BrandContextProvider = ({children}) => {
    const [brands, setBrands] = useState([]);
    useEffect(() => {       
        async function ProductsData() {
            const url = 'https://tranducbo.herokuapp.com';
            const resp = await axios.get(`${url}/brands`);
            // console.log(resp.data);
            setBrands(resp.data);
          }
          ProductsData();
    }, [])
    return (
        <BrandContext.Provider value={brands}>
        {children}
        </BrandContext.Provider>
    )
}

export {BrandContextProvider, BrandContext};
