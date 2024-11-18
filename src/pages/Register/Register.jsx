import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
  const { createNewUser, updateUserProfile, logoutUser } = useContext(AuthContext);
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
      .then((result) => {
        updateUserProfile({displayName, photoURL})
        .then(()=>{
            logoutUser()
            navigate("/login");
        })
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="max-w-xl bg-slate-300 p-4">
        <h2 className="mb-6">Register</h2>
        <form onSubmit={handleRegister} className="space-y-3">
          <div>
            <input
              type="text"
              name="displayName"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <input
              type="text"
              name="photoURL"
              placeholder="Enter your photo url"
            />
          </div>
          <div>
            <input type="text" name="email" placeholder="Enter your email" />
          </div>
          <div>
            <input
              type="text"
              name="password"
              placeholder="Enter your passsword"
            />
          </div>
          <div>
            <input
              type="text"
              name="confirm-password"
              placeholder="Confirm your password"
            />
          </div>
          <div>
            <button className="w-full text-center">Register</button>
          </div>
        </form>
        <p>
          Already Have an Account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
