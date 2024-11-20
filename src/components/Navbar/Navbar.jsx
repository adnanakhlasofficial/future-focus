import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import userIcon from "../../assets/user.svg";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser()
    .then(() => {
      Swal.fire({
        title: "Logged Out Successfully",
        text: "You have been logged out. See you next time!",
        icon: "success"
      });
    })
    .catch(error => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.code,
      });
    })
  }
  
  return (
    <div className="font-mulish">
      <div className="wrapper flex min-h-20 flex-col items-center justify-between gap-4 py-3 lg:flex-row">
        <div>
          <h1 className="font-playfair text-4xl font-bold text-blue-gray">
            <Link to="/">Future Focus</Link>
          </h1>
        </div>
        <div>
          <ul className="flex gap-3 lg:gap-6 text-center *:uppercase *:text-sm">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active" : "link-deactive"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active" : "link-deactive"
                }
                to="/services"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active" : "link-deactive"
                }
                to="/contact"
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active" : "link-deactive"
                }
                to="/profile"
              >
                Profile
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="lg:self-center flex gap-4 items-center lg:justify-self-end">
          {
            user && user?.email && (
              <div className="flex items-center gap-3">
                <h2 className="text-center font-bold">{user?.displayName}</h2>
                <Link to="/profile">
                  <img
                    className="h-10 w-10 object-cover object-center rounded-full ring ring-primary ring-offset-2"
                    src={user && user?.photoURL ? user?.photoURL : userIcon} 
                    alt=""
                  />
                </Link>
              </div>
            )
          }
          {user && user?.email ? (
            <Link onClick={handleLogout} className="btn-main block">
              Logout
            </Link>
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
