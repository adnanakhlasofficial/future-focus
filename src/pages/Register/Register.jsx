import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import eye from "../../assets/eye.svg";
import eyeSlash from "../../assets/eyeSlash.svg";
import Swal from "sweetalert2";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Register = () => {
  const {
    createNewUser,
    updateUserProfile,
    logoutUser,
    setLoading,
    googleLogin,
    setUser,
  } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [passwordTest, setPasswordTest] = useState(true);

  const navigate = useNavigate();

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{6,}$/;

  const handleRegister = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const displayName = form.get("displayName");
    const photoURL = form.get("photoURL");
    const email = form.get("email");
    const passsword = form.get("password");
    const confirmPassword = form.get("confirm-password");

    if (passsword !== confirmPassword) {
      return Swal.fire({
        icon: "error",
        title: "Passwords Do Not Match",
        text: "The passwords you entered do not match. Please try again.",
      });
    }

    if (!passwordRegex.test(passsword)) {
      setPasswordTest(false);
      return Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "The password you entered is incorrect. Please check your credentials and try again.",
      });
    } else {
      setPasswordTest(true);
    }

    createNewUser(email, passsword)
      .then(() => {
        updateUserProfile({ displayName, photoURL }).then(() => {
          Swal.fire({
            title: `Hi, ${displayName}`,
            text: "We are pleased to confirm that your registration for has been successful.",
            icon: "success",
          });
          logoutUser();
          navigate("/login");
        });
      })
      .catch((error) => {
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.code,
        });
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        setUser(result.user);
        Swal.fire({
          title: "Success",
          text: "You are successfully logged in",
          icon: "success",
        });
        navigate(
          location?.state?.from?.pathname
            ? location?.state?.from?.pathname
            : "/",
        );
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.code,
        });
      });
  };

  return (
    <HelmetProvider>
      <div className="mx-4 flex min-h-[calc(100vh-144px)] items-center justify-center">
        <Helmet>
          <title>Register | Future Focus</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>
        <div className="w-full max-w-lg space-y-5 rounded-lg bg-slate-300 px-4 py-8">
          <div className="space-y-2">
            <h2 className="font-playfair text-4xl font-semibold text-blue-gray">
              Future Focus
            </h2>
            <p className="desc !text-blue-gray">Register today for free</p>
          </div>
          <form onSubmit={handleRegister} className="w-full space-y-3 *:w-full">
            <div>
              <input
                type="text"
                autoFocus
                required
                name="displayName"
                className="form-input"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <input
                type="text"
                name="photoURL"
                className="form-input"
                placeholder="Enter your photo url"
              />
            </div>
            <div>
              <input
                type="text"
                required
                name="email"
                className="form-input"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="group relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  className="form-input"
                  placeholder="Enter your passsword"
                />
                <img
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 z-20 hidden h-5 w-5 -translate-y-1/2 group-hover:inline"
                  src={showPassword ? eyeSlash : eye}
                  alt=""
                />
              </label>
            </div>
            <div>
              <input
                type={showPassword ? "text" : "password"}
                name="confirm-password"
                required
                className="form-input"
                placeholder="Confirm your password"
              />
            </div>
            {!passwordTest && (
              <div className="!my-4">
                <ul className="ml-4 list-disc list-inside text-red-600 font-semibold">
                  <li>At least 6 characters long.</li>
                  <li>Contains at least one uppercase letter (A–Z).</li>
                  <li>Contains at least one lowercase letter (a–z).</li>
                  <li>Includes at least one digit (0–9).</li>
                  <li>
                    Includes at least one special character: @, $, !, %, *, ?,
                    &, or .
                  </li>
                </ul>
              </div>
            )}
            <div>
              <button className="btn-main w-full text-center">Register</button>
            </div>
          </form>
          <p className="font-semibold">
            Already Have an Account?{" "}
            <Link
              className="font-bold underline-offset-2 hover:text-primary hover:underline"
              to="/login"
            >
              Login
            </Link>
          </p>
          <p>
            <button className="btn-main w-full" onClick={handleGoogleLogin}>
              Login with Google
            </button>
          </p>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Register;
