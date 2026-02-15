import { useEffect, useState } from "react";

export function useProducts(){
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,SetError] = useState(null);

    useEffect(()=>{
        const fetchProducts = async ()=>{
            try{
                const res = await fetch('https://fakestoreapi.com/products');
                const data = await res.json();
                setProducts(data);
            }catch(err){
                SetError("Something went wrong")
            }finally{
                setLoading(false);
            }
        }
        fetchProducts();
    },[])

    return {products,loading,error}
}