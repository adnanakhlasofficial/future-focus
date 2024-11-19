import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import userIcon from "../../assets/user.svg";

const MyProfile = () => {
  const { user, updateUserProfile, setLoading } = useContext(AuthContext);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    
    const form = new FormData(e.target);
    const displayName = form.get("name") ? form.get("name") : user?.displayName;
    const photoURL = form.get("photo-url") ? form.get("photo-url") : user?.photoURL;
    
    console.log({displayName, photoURL});

    updateUserProfile({displayName, photoURL})
    .then(() => {
        setLoading(false)
    })
    
  };

  return (
    <div className="wrapper grid min-h-[calc(100vh-300px)] place-items-center">
      <div className="w-full max-w-xl space-y-6 rounded-lg bg-slate-300 px-4 py-4">
        <div>
          <img
            className="h-40 w-40 object-cover object-center rounded-full ring-4 ring-offset-4 ring-offset-slate-300 ring-primary"
            src={user && user?.photoURL ? user?.photoURL : userIcon}
            alt=""
          />
        </div>
        <div className="space-y-4">
          <h2 className="font-mulish text-xl font-semibold text-blue-gray">
            My Profile
          </h2>
          <section className="flex justify-between">
            <div>
              <p className="text-deep-black font-playfair text-3xl font-bold">
                {user?.displayName}
              </p>
              <p className="desc !text-blue-gray">{user?.email}</p>
            </div>
            <div>
              <p className="text-gray">
                Creation Time: {user?.metadata?.creationTime.slice(0, 16)}
              </p>
            </div>
          </section>
        </div>
        <div>
          <form onSubmit={handleUpdateProfile} className="space-y-3 font-mulish">
            <div>
              <input
                type="text"
                name="name"
                className="form-input"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <input
                defaultValue={user?.email}
                disabled
                type="text"
                name="email"
                className="form-input"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <input
                type="url"
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
  );
};

export default MyProfile;
