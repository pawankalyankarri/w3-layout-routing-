import { NavLink, Outlet } from "react-router-dom"

const Navbar = () => {
    return(
        <div>
            {/* <ul className="flex justify-evenly p-5">
                <li><NavLink to="js">Java script</NavLink></li>
                <li><NavLink to="react">React</NavLink></li>
                <li><NavLink to="html">HTML</NavLink></li>
                
            </ul> */}
            <Outlet/>
        </div>
    )
}
export default Navbar;