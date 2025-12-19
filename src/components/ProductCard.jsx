const productCard  = ({product})=>{

    return (
        <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-3">
        <img src="{product.images[0]}" alt="product.title" className="w-full h-48 object-cover rounded-lg" />

        <div className="mt-3">
            <h3 className="font-semibold text-sm">{product.title}</h3>
            <p className="text-gray-500 text-xs">{product.brand}</p>

            <div className="flex item-center gap-2 mt-1">
                <span className="font-bold text-lg">₹{product.price}</span>
                <span className="text-green-600 text-sm">{product.discount}% OFF</span>
            </div>
            
            <p>Sizes: {product.sizes.join(", ")}</p>
        
            <button className="mt-3 w-full bg-black text-white text-sm py-2 rounded-lg hover:bg-gray-800">Add to Bag</button>

        </div>
        </div>
    );
};


export default productCard;