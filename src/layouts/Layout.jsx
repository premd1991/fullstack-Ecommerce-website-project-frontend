import Footer from "./Footer";
import Header from "./header/Header";
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    
      <>
     <Header/>
     
    <div className=" outlet-height">
     <Outlet/>
    </div>

     <Footer/>
      </>
  )
}

export default Layout
