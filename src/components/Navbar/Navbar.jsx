import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import userIcon from "../../assets/user.svg";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <div className="font-mulish">
      <div className="wrapper min-h-20 flex flex-col lg:flex-row justify-between items-center gap-4 py-3">
        <div>
          <h1 className="font-playfair text-4xl font-bold text-blue-gray">
            Future Focus
          </h1>
        </div>
        <div>
          <ul className="flex gap-3">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "link-active"
                    : "link-deactive"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "link-active"
                    : "link-deactive"
                }
                to="/services"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "link-active"
                    : "link-deactive"
                }
                to="/contact"
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "link-active"
                    : "link-deactive"
                }
                to="/profile"
              >
                Profile
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="lg:self-center lg:justify-self-end">
          {user && user?.email ? (
            <div>
              <button onClick={logoutUser}>
                <img
                  className="h-10 w-10 rounded-full ring ring-primary ring-offset-2"
                  src={user && user?.photoURL ? user?.photoURL : userIcon} 
                  alt=""
                />
              </button>
            </div>
          ) : (
            <Link className="btn-main block" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
