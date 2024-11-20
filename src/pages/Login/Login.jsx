import { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import eye from "../../assets/eye.svg";
import eyeSlash from "../../assets/eyeSlash.svg";
import Swal from "sweetalert2";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Login = () => {
  const { loginUser, setUser, googleLogin, user, setLoading, loading } =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location?.state?.from?.pathname);

  if (user)
    return (
      <Navigate
        to={
          location?.state?.from?.pathname
            ? location?.state?.from?.pathname
            : "/"
        }
      ></Navigate>
    );

  const handleLogin = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    loginUser(email, password)
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
        setLoading(false);
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
          <title>Login | Future Focus</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>
        <div className="w-full max-w-lg space-y-5 rounded-lg bg-slate-300 px-4 py-8">
          <div className="space-y-2">
            <h2 className="font-playfair text-4xl font-semibold text-blue-gray">
              Future Focus
            </h2>
            <p className="desc !text-blue-gray">Login in to your acccount</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-3">
            <div>
              <input
                type="text"
                autoFocus
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
              <Link
                className="mt-2 block w-max text-sm font-medium underline-offset-2 hover:text-primary hover:underline"
                to="/forget-password"
              >
                Forget Passsword?
              </Link>
            </div>

            <div>
              <button className="btn-main w-full text-center">Login</button>
            </div>
          </form>
          <p className="font-semibold">
            Don&apos;t have an account?{" "}
            <Link
              className="text-primary underline-offset-2 hover:underline"
              to="/register"
            >
              Create an account
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

export default Login;
