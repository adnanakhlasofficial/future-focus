import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const { loginUser, setUser, googleLogin } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    loginUser(email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        alert(error.code);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        alert(error.code);
      });
  };

  return (
    <div className="flex min-h-[calc(100vh-144px)] items-center justify-center">
      <div className="max-w-xl bg-slate-300 p-4">
        <h2 className="mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-3">
          <div>
            <input type="text" name="email" placeholder="Enter your email" />
          </div>
          <div>
            <input
              type="text"
              name="password"
              placeholder="Enter your passsword"
            />
            <Link
              className="block w-max text-sm hover:underline"
              to="/forget-password"
            >
              Forget Passsword
            </Link>
          </div>

          <div>
            <button className="w-full text-center">Login</button>
          </div>
        </form>
        <p>
          Don&apos;t Have an Account?{" "}
          <Link to="/register">Create an Account</Link>
        </p>
        <p>
          <button onClick={handleGoogleLogin}>Login with Google</button>
        </p>
      </div>
    </div>
  );
};

export default Login;
