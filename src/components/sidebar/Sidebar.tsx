import { NavLink } from "react-router-dom"

const Sidebar = () => {
    return(
        <div>
            <ul className="sm:p-10 p-5 flex sm:flex-col justify-evenly  gap-5">
                <li><NavLink to="profile">Profile</NavLink> </li>
                <li><NavLink to="Order">Orders</NavLink> </li>
            </ul>
        </div>
    )
}
export default Sidebar;