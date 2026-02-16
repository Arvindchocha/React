import { useEffect, useState } from "react";

export function useProducts(){
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        const fetchProducts = async ()=>{
            try{
                const res = await fetch('https://fakestoreapi.com/products');
                const data = await res.json();
                setProducts(data);
            }catch(err){
                setError(`Something went wrong: ${err.message}`);
            }finally{
                setLoading(false);
            }
        }
        fetchProducts();
    },[])

    return {products,loading,error}
}