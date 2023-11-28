import axios from "axios";
import { useEffect, useState } from "react"
import { ProductsApi } from "../config/constants";

export const Products = () => {
    const [products, setProducts] = useState({
        "total": 0,
        "skip": 0,
        "limit": 0,
        products:[]
    });
    const getProducts = async () => {
        try {
            const result = await axios.get(ProductsApi);
            setProducts({...products,...result.data})
        }
        catch(ex){
            console.log(ex);
        }
    };
    useEffect(() => {
        
        getProducts();
    }, [])
    return (
        <div>
            Products
            {JSON.stringify(products)}
        </div>
    )
}