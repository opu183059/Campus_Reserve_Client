import { useContext } from "react";
import { Authcontext } from "../../provider/Authprovider";

const Profile = () => {
  const { user } = useContext(Authcontext);
  console.log(user);
  return (
    <div className="min-h-screen pt-20">
      <div className="flex gap-8 max-w-5xl mx-auto mt-6 bg-sky-50 shadow-xl rounded-xl p-8">
        <div className="left ">
          <img
            src="https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg"
            alt=""
            className="w-48 h-40 rounded-lg border-2 border-sky-900"
          />
        </div>
        <div className="left text-xl italic font-semibold">
          <h3 className="mb-4 underline font-bold text-sky-900">
            User Profile
          </h3>
          <p>Name:{user?.displayName}</p>
          <p>Email: {user?.email}</p>
          <p>Address: {user?.email}</p>
          <p>University: {user?.email}</p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-6 bg-sky-50 shadow-xl rounded-xl p-8">
        <h1 className="font-bold text-xl">Update Profile</h1>
      </div>
    </div>
  );
};

export default Profile;
