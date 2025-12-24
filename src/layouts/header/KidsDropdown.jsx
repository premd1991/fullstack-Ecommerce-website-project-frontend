const KidsDropdown = () => {
  return (
    <div
      className="absolute left-1/2 top-full mt-3 
          w-[1000px] h-[700px]
          -translate-x-1/2 
          bg-white border border-gray-200 
          shadow-xl rounded-lg 
          px-2 py-4 
          z-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-2 gap-y-2">
        {/* Column 1 */}
        <div>
          <h3 className="text-orange-500 font-semibold text-sm  mb-2">
            Boys Clothing
          </h3>
          <ul className="space-y-2 text-sm text-[12px] leading-6">
            <li>T-Shirts</li>
            <li>Shirts</li>
            <li>Shorts</li>
            <li>Jeans</li>
            <li>Trousers</li>
            <li>Clothing Sets</li>
            <li>Ethnic Wear</li>
            <li>Track Pants & Pyjamas</li>
            <li>Jacket, Sweater & Sweatshirts</li>
            <li>Party Wear</li>
            <li>Innerwear & Thermals</li>
            <li>Nightwear & Loungewear</li>
            <li>Value Packs</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-orange-500 font-semibold text-sm mb-4">
            Girls Clothing
          </h3>
          <ul className="space-y-2 text-sm  text-[12px] leading-6">
            <li>Dresses</li>
            <li>Tops</li>
            <li>Tshirts</li>
            <li>Clothing Sets</li>
            <li>Lehenga choli</li>
            <li>Kurta Sets</li>
            <li>Party wear</li>
            <li>Dungarees & Jumpsuits</li>
            <li>Skirts & Shorts</li>
            <li>Tights & Leggings</li>
            <li>Jeans, Trousers & Capris</li>
            <li>Jacket, Sweater & Sweatshirts</li>
            <li>Innerwear & Thermals</li>
            <li>Nightwear & Loungewear</li>
            <li>Value Packs</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-orange-500 font-semibold text-sm mb-4">
            Footwear
          </h3>
          <ul className="space-y-2 text-sm text-[12px] leading-6">
            <li>Casual Shoes</li>
            <li>Flipflops</li>
            <li>Sports Shoes</li>
            <li>Flats</li>
            <li>Sandals</li>
            <li>Heels</li>
            <li>School Shoes</li>
            <li>Socks</li>
          </ul>

          <h3 className="text-orange-500 font-semibold text-sm mt-6 mb-4">
            Toys & Games
          </h3>
          <ul className="space-y-2 text-sm text-[12px] leading-6">
            <li>Learning & Development</li>
            <li>Activity Toys</li>
            <li>Soft Toys</li>
            <li>Action Figure / Play set</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-orange-500 font-semibold text-sm mb-4">
            Infants
          </h3>
          <ul className="space-y-2 text-sm text-[12px] leading-6">
            <li>Bodysuits</li>
            <li>Rompers & Sleepsuits</li>
            <li>Clothing Sets</li>
            <li>Tshirts & Tops</li>
            <li>Dresses</li>
            <li>Bottom wear</li>
            <li>Winter Wear</li>
            <li>Innerwear & Sleepwear</li>
            <li>Infant Care</li>
          </ul>
        </div>

        {/* Column 5 */}
        <div>
          <h3 className="text-orange-500 font-semibold text-sm mb-4">
            Kids Accessories
          </h3>
          <ul className="space-y-2 text-sm text-[12px] leading-6">
            <li>Bags & Backpacks</li>
            <li>Watches</li>
            <li>Jewellery & Hair accessory</li>
            <li>Sunglasses</li>
            <li>Masks & Protective Gears</li>
            <li>Caps & Hats</li>
          </ul>

          <h3 className="text-orange-500 font-semibold text-sm mt-6 mb-4">
            Brands
          </h3>
          <ul className="space-y-2 text-sm text-[12px]leading-6">
            <li>H&M</li>
            <li>Max Kids</li>
            <li>Pantaloons</li>
            <li>UCB Kids</li>
            <li>YK</li>
            <li>U.S. Polo Assn. Kids</li>
            <li>Mothercare</li>
            <li>HRX</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default KidsDropdown;
