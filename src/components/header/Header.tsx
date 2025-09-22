import { NavLink } from "react-router-dom"

const Header = () => {
    return(
        <div className="">
            <ul className="flex justify-evenly p-5">
                <li><NavLink to="tutorial">Tutorial</NavLink></li>
                <li><NavLink to="reference">Reference</NavLink></li>
                <li><NavLink to="exercises">Exercises</NavLink></li>
                <li><NavLink to="certificates">Certificates</NavLink></li>
            </ul>
            <ul className="flex justify-evenly p-5 bg-amber-400">
                <li><NavLink to="js">Java script</NavLink></li>
                <li><NavLink to="react">React</NavLink></li>
                <li><NavLink to="html">HTML</NavLink></li>
                <li><NavLink to='employees'>Employees</NavLink></li>
                <li>Students</li>
            </ul>
        </div>
    )
}
export default Header;