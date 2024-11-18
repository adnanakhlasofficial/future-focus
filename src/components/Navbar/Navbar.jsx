import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
    const {user, logoutUser} = useContext(AuthContext);
    
  return (
    <div className="bg-blue-900 ">
      <div className="wrapper grid grid-cols-3 items-center py-3">
        <div>
          <h1 className="font-playfair text-4xl font-bold text-blue-gray">Future Focus</h1>
        </div>
        <div className="place-self-center">
          <ul className="flex gap-3">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-primary font-semibold" : "text-gray font-semibold"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-primary font-semibold" : "text-gray font-semibold"
                }
                to="/services"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-primary font-semibold" : "text-gray font-semibold"
                }
                to="/contacts"
              >
                Contacts
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-primary font-semibold" : "text-gray font-semibold"
                }
                to="/profile"
              >
                Profile
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="self-center justify-self-end">
          {
            user && user?.email ? <Link onClick={logoutUser} className="btn btn-primary" to="/login">
            Logout
          </Link> : <Link className="btn btn-primary" to="/login">
            Login
          </Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
