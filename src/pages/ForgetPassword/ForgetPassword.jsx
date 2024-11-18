import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const ForgetPassword = () => {
  const emailRef = useRef(null);
  const { passwordReset } = useContext(AuthContext);

  useEffect(() => {
    emailRef.current.focus();
  },[]);

  const handleResetPassword = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    passwordReset(email)
    .then(() => {
        alert("email sent")
    })
    .catch(error => alert(error.code))
  };

  return (
    <div className="flex min-h-[calc(100vh-144px)] items-center justify-center">
      <div className="max-w-xl bg-slate-300 p-4">
        <h2 className="mb-6">Reset Your Password</h2>
        <form onSubmit={handleResetPassword} className="space-y-3">
          <div>
            <input
              ref={emailRef}
              type="text"
              name="email"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <button className="w-full text-center">Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
