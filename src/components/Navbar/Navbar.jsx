import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <div className="font-mulish">
      <div className="wrapper grid grid-cols-3 items-center py-3">
        <div>
          <h1 className="font-playfair text-4xl font-bold text-blue-gray">
            Future Focus
          </h1>
        </div>
        <div className="place-self-center">
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
                to="/contacts"
              >
                Contacts
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
        <div className="self-center justify-self-end">
          {user && user?.email ? (
            <div>
              <button onClick={logoutUser}>
                <img
                  className="h-10 w-10 rounded-full ring ring-primary ring-offset-2"
                  src="https://i.ibb.co.com/wSp6M5n/profile-picture.png"
                  alt=""
                />
              </button>
            </div>
          ) : (
            <Link className="btn-main" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
