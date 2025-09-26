import { Outlet, useLocation } from "react-router-dom";
import SidebarLang from "../sidebarforlang/SidebarLang";
import { ReactSidebarOptions } from "../javascriptcomponents/JsSidebarDetails";

const React = () => {
    const location = useLocation()
    return (
        <div className="grid w-full h-full ">
            {/* <div className=""> <SidebarLang data  = {ReactSidebarOptions}/></div> */}
            {location.pathname === '/react' && <div className=" flex justify-center items-center font-bold font-serif">This is React Page</div>}
            <div><Outlet/></div>
        </div>
    )
}

export default React;