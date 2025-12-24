import { useEffect, useRef, useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";



const Productslider =() => {
    const [items, setItems] = useState([]);
    const sliderRef = useRef(null);
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/product/slider")
        .then(res => setItems(res.data));
    }, []);

    const scroll = (dir) => {
    sliderRef.current.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth"
    });
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4">
      {/* Fades */}
      <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10" />

      {/* Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/70 text-white p-3 rounded-full"
      >
        ‹
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/70 text-white p-3 rounded-full"
      >
        ›
      </button>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-scroll scrollbar-hide"
      >
        {items.map(item => (
          <div
            key={item.id}
            className="min-w-[260px] cursor-pointer"
            onClick={() => navigate(item.link)}
          >
            <img
              src={item.image}
              className="w-full h-64 object-cover rounded-md"
              alt={item.title}
            />
            <h3 className="mt-2 text-sm font-semibold">{item.title}</h3>
            <p className="text-xs text-gray-600">{item.discount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productslider;