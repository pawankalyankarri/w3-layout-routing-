import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import SidebarPage from "./components/sidebar/SidebarPage";

function App() {
  return (
    // <div className=" w-full grid grid-rows-[auto_1fr_auto] grid-cols-1 sm:grid-rows-[auto_1fr_auto] sm:grid-cols-2  ">
    //   <div className="sm:row-span-1">
    //     <SidebarPage />
    //   </div>
    //   <div className="  sm:col-span-1 sm:row-span-1">
    //     <Header />
    //   </div>

    //   <div className=" overflow-y-auto sm:row-span-1">
    //     <Outlet />
    //   </div>
    //   <div className=" sm:row-span-1 bg-red-400">
    //     <Footer />
    //   </div>
    // </div>
    <SidebarPage/>
  );
}

export default App;
