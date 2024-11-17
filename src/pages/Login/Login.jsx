import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    console.log(email, password);
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content p-0 flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">{/* Image */}</div>
          <div className="card bg-base-100 w-full max-w-2xl shrink-0 shadow-2xl p-8">
            <h2 className="text-3xl font-playfair text-center">Login </h2>
            <form onSubmit={handleLogin} className="card-body p-0">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="mt-4">
              Don&apos;t have and account?{" "}
              <Link className="text-red-500 font-semibold" to="/register">Create an Account</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
