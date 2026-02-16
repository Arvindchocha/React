import { useEffect, useState } from "react";

export function useProduct(){
    const [product,setProduct] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        const fetchProducts = async ()=>{
            try{
                const res = await fetch(`https://fakestoreapi.com/products/${id}`);
                const data = await res.json();
                setProduct(data);
            }catch(err){
                setError(`Something went wrong: ${err.message}`);
            }finally{
                setLoading(false);
            }
        }
        fetchProducts();
    },[])

    return {product,loading,error}
}