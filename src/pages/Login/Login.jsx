import { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import eye from "../../assets/eye.svg";
import eyeSlash from "../../assets/eyeSlash.svg";

const Login = () => {
  const { loginUser, setUser, googleLogin, user } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const { state } = useLocation();
  const navigate = useNavigate();

  if (user) return <Navigate to="/"></Navigate>;
  console.log(state);
  const handleLogin = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    loginUser(email, password)
      .then((result) => {
        setUser(result.user);
        navigate(state ? state : "/");
      })
      .catch((error) => {
        alert(error.code);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        setUser(result.user);
        navigate(state ? state : "/");
      })
      .catch((error) => {
        alert(error.code);
      });
  };

  return (
    <div className="flex min-h-[calc(100vh-144px)] items-center justify-center">
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
  );
};

export default Login;
