
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <h1 className="bg-primary text-light text-center p-2 ">Studio Ghibli</h1>
            <nav className="d-flex justify-content-around bg-primary text-light text-center p-2">
            <NavLink
                exact
                to="/"
                activeClassName="border-bottom border-light bg-info nav-link text-light"
                className="nav-link text-light"
            >
                Home
            </NavLink>
            <NavLink
                to="/films"
                activeClassName="border-bottom border-light bg-info nav-link text-light"
                className="nav-link text-light"
            >
                Films
            </NavLink>
            <NavLink
                to="/people"
                activeClassName="border-bottom border-light bg-info nav-link text-light"
                className="nav-link text-light"
            >
                People
            </NavLink>
            <NavLink
                to="/locations"
                activeClassName="border-bottom border-light bg-info nav-link text-light"
                className="nav-link text-light"
            >
                Places
            </NavLink>
            {/* <NavLink
                to="/vehicles"
                activeClassName="border-bottom border-light bg-info nav-link text-light"
                className="nav-link text-light"
            >
                Vehicles
            </NavLink>
            <NavLink
                to="/species"
                activeClassName="border-bottom border-light bg-info nav-link text-light"
                className="nav-link text-light"
            >
                Vehicles
            </NavLink> */}
            </nav>
        </div>
    );
   };
   

export default Navbar;