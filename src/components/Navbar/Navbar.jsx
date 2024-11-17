import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-900 ">
      <div className="wrapper grid grid-cols-3 items-center py-3">
        <div>
          <h1 className="font-playfair text-4xl font-bold">Future Focus</h1>
        </div>
        <div className="place-self-center">
          <ul className="flex gap-3">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-red-500" : "text-blue-500"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-red-500" : "text-blue-500"
                }
                to="/services"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-red-500" : "text-blue-500"
                }
                to="/contacts"
              >
                Contacts
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-red-500" : "text-blue-500"
                }
                to="/profile"
              >
                Profile
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="self-center justify-self-end">
          <Link className="btn btn-primary" to="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
