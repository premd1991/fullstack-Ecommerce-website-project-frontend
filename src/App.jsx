// Router Imports
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Layout Imports
import Layout from "./layouts/Layout";
// Pages Imports
import Home from "./pages/Home";
import About from "./pages/About";
import MenProducts from "./pages/MenProducts";
import WomenProducts from "./pages/WomenProducts";
import KidsProducts from "./pages/KidsProducts";
import Contact from "./pages/Contact";
// Auth Imports
import Login from "./auth/Login";
import Register from "./auth/Register";

function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Men" element={<MenProducts />} />
            <Route path="/Women" element={<WomenProducts />} />
            <Route path="/Kids" element={<KidsProducts />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/register" element={<Register />} />


          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
