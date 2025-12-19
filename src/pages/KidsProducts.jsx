import React from 'react';
import kidsData from "../data/kidsProducts.json";
import ProductCard from '../components/ProductCard.jsx';

const KidsProducts = () => {
 
  return (
    <div>
    <h1 className='max-w-7xl mx-auto px-4 py-6'>Kids Collection</h1>

    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>{kidsData.products.map((product, index) =>(
      <ProductCard key = {index} product={product}/>
    ))}
     </div>
    </div>
  
  );
};

export default KidsProducts;
