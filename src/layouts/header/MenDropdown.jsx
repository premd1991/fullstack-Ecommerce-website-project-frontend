const MenDropdown = () => {
  return (
    <div className="absolute left-0 top-full w-screen bg-white shadow-xl border-t z-50">
      <div className="max-w-7xl mx-auto px-10 py-8 grid grid-cols-5 gap-8 text-sm">

        <div>
          <h3 className="text-pink-600 font-bold mb-3">Topwear</h3>
          <ul className="space-y-2">
            <li>T-Shirts</li>
            <li>Casual Shirts</li>
            <li>Formal Shirts</li>
            <li>Jackets</li>
            <li>Sweaters</li>
          </ul>
        </div>

        <div>
          <h3 className="text-pink-600 font-bold mb-3">Bottomwear</h3>
          <ul className="space-y-2">
            <li>Jeans</li>
            <li>Trousers</li>
            <li>Shorts</li>
            <li>Joggers</li>
          </ul>
        </div>

        <div>
          <h3 className="text-pink-600 font-bold mb-3">Footwear</h3>
          <ul className="space-y-2">
            <li>Casual Shoes</li>
            <li>Sneakers</li>
            <li>Sports Shoes</li>
            <li>Flip Flops</li>
          </ul>
        </div>

        <div>
          <h3 className="text-pink-600 font-bold mb-3">Sports</h3>
          <ul className="space-y-2">
            <li>Active Wear</li>
            <li>Tracksuits</li>
            <li>Swimwear</li>
          </ul>
        </div>

        <div>
          <h3 className="text-pink-600 font-bold mb-3">Accessories</h3>
          <ul className="space-y-2">
            <li>Watches</li>
            <li>Wallets</li>
            <li>Bags</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default MenDropdown;
