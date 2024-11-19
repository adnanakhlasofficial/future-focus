import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet, HelmetProvider } from "react-helmet-async";

const ForgetPassword = () => {
  const emailRef = useRef(null);
  const { passwordReset } = useContext(AuthContext);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const handleResetPassword = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    passwordReset(email)
      .then(() => {
        Swal.fire({
          title: "Password reset email sent!",
          icon: "success",
        });
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
          <title>Services | Future Focus</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>
        <div className="w-full max-w-md space-y-5 rounded-lg bg-slate-300 px-4 py-8">
          <h2 className="mb-6 font-playfair text-3xl font-semibold text-blue-gray">
            Reset Your Password
          </h2>
          <form onSubmit={handleResetPassword} className="space-y-3">
            <div>
              <input
                ref={emailRef}
                className="form-input"
                type="text"
                name="email"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <button className="btn-main w-full text-center">Reset</button>
            </div>
          </form>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default ForgetPassword;
