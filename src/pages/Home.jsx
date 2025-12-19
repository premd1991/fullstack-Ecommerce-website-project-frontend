import React from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {
   
     const navigate = useNavigate();
     
     const goMen = () => navigate("/Men");
     const goWomen = () => navigate("/Women")
  return (
   <>
 <div className="w-full overflow-hidden">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl3119fGJ1C0zU_7rLEnqObOPsf_-h91qwMQ&s" alt="Top banner"  className='w-full h-20 md:h-32 object-contian ml-7 mr-60 mt-2' />
   </div>
   <div>
    <img src="https://images.freekaamaal.com/post_images/1683544641.webp" alt="" className='w-full h-20 md:h-90 mt-2'/>
   </div>
      {/* Left half */}
      <div onClick={goMen} className="absolute top-0 left-0 w-1/2 h-full cursor-pointer" ></div>

      {/* Right half */}
      <div onClick={goWomen} className="absolute top-0 right-0 w-1/2 h-full cursor-pointer" ></div>
   
   <div className="bg-white">
  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
      Super Saver
    </h2>
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-3">
      <div className="group relative">
        <img
          src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg"
          alt="Front of men's Basic Tee in black."
          className="aspect-square w-50 rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-50"
        />
       
      </div>
      <div className="group relative">
        <img
          src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg"
          alt="Front of men's Basic Tee in white."
          className="aspect-square w-50 rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-50"
        />
        
      </div>
      <div className="group relative">
        <img
          src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg"
          alt="Front of men's Basic Tee in dark gray."
          className="aspect-square w-50 rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-50"
        />
      
      </div>
      <div className="group relative">
        <img
          src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg"
          alt="Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube."
          className="aspect-square w-50 rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-50"
        />
    
      </div>
    </div>
  </div>
        
        
</div>

   </>
  )
}

export default Home
