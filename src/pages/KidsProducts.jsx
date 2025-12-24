import React, {useEffect, useState} from 'react';
import ProductCard from '../components/ProductCard.jsx';
import axios from "axios"

const KidsProducts = () => {
 
    const [product,setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(()=> {
      const fetchkidsProducts = async()=>{
        try{
          const res = await axios.get("http://localhost:3000/api/products/kids")
        
        setProducts(res.data.products);
      }
      catch(err){
        setError("Failed to load kids products")
      }
      finally{
        setLoading(false);
      }
    }
    fetchkidsProducts();
    }, []);

    if (loading) {
    return <h2 className="text-center mt-10">Loading products...</h2>;
  }

  if (error) {
    return <h2 className="text-center mt-10 text-red-500">{error}</h2>;
  }


  return (
    <div className='max-w-7xl mx-auto px-4 py-6'>
    <h1 className='text-2xl font-bold mb-6'>Kids Collection</h1>

    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>{product.map(product =>(
      <ProductCard key = {product.id} product={product}/>
    ))}
     </div>
    </div>
  
  );
};

export default KidsProducts;
