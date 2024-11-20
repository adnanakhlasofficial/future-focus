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

    console.log({ displayName, photoURL, email, passsword, confirmPassword });

    if (passsword !== confirmPassword) return alert("Password doesn't match.");
    if (!passwordRegex.test(passsword))
      return alert("Password validation dont match");

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
        console.log(error);
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
        // console.log("state", state);
      })
      .catch((error) => {
        alert(error.code);
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
                className="form-input"
                placeholder="Confirm your password"
              />
            </div>
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
