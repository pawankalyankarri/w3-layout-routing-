import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return <div className="h-full w-full grid grid-rows-[auto_auto_1fr_auto] grid-cols-1 sm:grid-rows-[auto_1fr_auto] sm:grid-cols-1  ">
    <div className="  sm:col-span-2 bg-green-400"><Header/></div>
    <div className="bg-blue-400 w-full min-h-full"><Outlet/></div> 
    <div className=" sm:col-span-2 bg-red-400"><Footer/></div>
  </div>;
}

export default App;
