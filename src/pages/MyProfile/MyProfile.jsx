import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import userIcon from "../../assets/user.svg";
import Swal from "sweetalert2";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

const MyProfile = () => {
  const { user, updateUserProfile, setLoading } = useContext(AuthContext);

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const displayName = form.get("name");
    const photoURL = form.get("photo-url");

    if (!displayName && !photoURL) {
      return alert("Fill the field");
    }

    updateUserProfile({ displayName, photoURL })
      .then(() => {
        setLoading(false);
        Swal.fire({
          title: "Profile Updated Successfully",
          text: "Your profile has been updated. All changes have been saved!",
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
      <div className="wrapper grid min-h-[calc(100vh-300px)] place-items-center">
        <Helmet>
          <title>Profile | Future Focus</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>
        <div className="w-full max-w-xl space-y-6 rounded-lg bg-slate-300 px-4 py-8">
          <Link
            to={user.photoURL && user.photoURL}
            target="_blank"
            className="px-4"
          >
            <img
              className="h-40 w-40 cursor-pointer rounded-full object-cover object-center ring-4 ring-primary ring-offset-4 ring-offset-slate-300"
              src={user && user?.photoURL ? user?.photoURL : userIcon}
              alt=""
            />
          </Link>
          <div className="space-y-4">
            <h2 className="font-mulish text-xl font-semibold text-blue-gray">
              My Profile
            </h2>
            <section className="flex flex-col justify-between gap-1 lg:flex-row">
              <div>
                <p className="font-playfair text-3xl font-bold tracking-wider text-deep-black">
                  {user?.displayName}
                </p>
                <p className="desc !text-blue-gray">{user?.email}</p>
              </div>
              <div>
                <p className="text-gray">
                  Created Date: {user?.metadata?.creationTime.slice(0, 16)}
                </p>
              </div>
            </section>
          </div>
          <div>
            <form
              onSubmit={handleUpdateProfile}
              className="space-y-3 font-mulish"
            >
              <div>
                <input
                  type="text"
                  required
                  name="name"
                  className="form-input"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <input
                  type="url"
                  required
                  name="photo-url"
                  className="form-input"
                  placeholder="Enter your photo url"
                />
              </div>

              <div>
                <button className="btn-main w-full text-center">
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default MyProfile;
