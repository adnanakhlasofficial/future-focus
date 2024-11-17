import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col p-0 lg:flex-row-reverse">
          <div className="text-center lg:text-left">{/* Image */}</div>
          <div className="card bg-base-100 w-full max-w-2xl shrink-0 p-8 shadow-2xl">
            <h2 className="font-playfair text-center text-3xl">Register </h2>
            <form  className="card-body p-0">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Profile</span>
                </label>
                <input
                  type="text"
                  name="profile"
                  placeholder="Enter your profile link"
                  className="input input-bordered"
                  required
                />
              </div>
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
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className="mt-4">
              Already have and account?{" "}
              <Link className="font-semibold text-red-500" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
