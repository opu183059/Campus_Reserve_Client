import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../provider/Authprovider";
import Swal from "sweetalert2";
import { getAuth, updateEmail, updateProfile } from "firebase/auth";
const Profile = () => {
  const { user, loading } = useContext(Authcontext);
  // console.log(user);
  const [profile, setProfile] = useState({});
  const [edit, setEdit] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    fetch(
      `https://campus-reserve-server-gamma.vercel.app/user-data/${user?.email}`
    )
      .then((res) => res.json())
      .then((result) => {
        setProfile(result);
      });
  }, [profile]);

  const editBtn = () => {
    setEdit(!edit);
    if (!edit) {
      scrollTo({
        top: 500,
        behavior: "smooth",
      });
    }
  };
  const saveProfile = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const address = form.address.value;
    const university = form.university.value;
    const photourl = form.photourl.value;
    const profileData = { name, email, address, university, photourl };

    fetch(
      `https://campus-reserve-server-gamma.vercel.app/user-profile-update/${user?.email}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(profileData),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          form.reset();
          updateProfile(auth.currentUser, {
            displayName: name,
          })
            .then(() => {
              console.log("displayname changed");
            })
            .catch((error) => {
              console.log(error);
            });
          updateEmail(auth.currentUser, email)
            .then(() => {
              console.log("email up dated");
            })
            .catch((error) => {
              console.log(error);
            });
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Data Updated successfully",
          });
        }
      });
  };
  return (
    <div className="min-h-screen pt-12 md:pt-20">
      <div className="relative flex flex-col items-center text-center md:text-left md:flex-row gap-8 max-w-5xl mx-auto mt-6 bg-sky-50 shadow-xl rounded-xl p-8">
        <div className="left ">
          <img
            src={profile?.photourl}
            alt=""
            className="w-48 h-40 rounded-lg border-2 border-sky-900"
          />
        </div>
        <div className="left text-xl italic font-semibold">
          <h3 className="mb-4 underline font-bold text-sky-900">
            User Profile
          </h3>
          <p>Name: {profile?.name}</p>
          <p>Email: {profile?.email}</p>
          <p>Address: {profile?.address}</p>
          <p>University: {profile?.university}</p>
        </div>
        <button
          className="bg-red-600 text-white px-3 py-1 w-16 rounded-lg md:absolute md:right-5 md:bottom-5"
          onClick={editBtn}
        >
          {edit ? "Close" : "Edit"}
        </button>
      </div>
      {edit && (
        <div className="max-w-5xl mx-auto mt-6 mb-5 bg-sky-50 shadow-xl rounded-xl p-8">
          <h1 className="font-bold text-xl mb-3">Update Profile</h1>
          <form onSubmit={saveProfile} action="">
            <div className="col-span-full">
              <label htmlFor="name" className="text-sm">
                Name
              </label>
              <input
                defaultValue={user?.displayName}
                id="name"
                name="name"
                type="text"
                className="h-9 ps-3 w-full rounded-md focus:ring border-[1px] focus:ring-opacity-75 focus:ring-blue-400 border-gray-700 text-gray-900"
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                defaultValue={user?.email}
                id="email"
                name="email"
                type="email"
                className="h-9 ps-3 w-full rounded-md focus:ring border-[1px] focus:ring-opacity-75 focus:ring-blue-400 border-gray-700 text-gray-900"
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="photourl" className="text-sm">
                Photo URL
              </label>
              <input
                defaultValue={profile?.photourl}
                id="photourl"
                name="photourl"
                type="text"
                className="h-9 ps-3 w-full rounded-md focus:ring border-[1px] focus:ring-opacity-75 focus:ring-blue-400 border-gray-700 text-gray-900"
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="address" className="text-sm">
                Address
              </label>
              <input
                defaultValue={profile?.address}
                id="address"
                name="address"
                type="text"
                className="h-9 ps-3 w-full rounded-md focus:ring border-[1px] focus:ring-opacity-75 focus:ring-blue-400 border-gray-700 text-gray-900"
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="university" className="text-sm">
                University
              </label>
              <input
                defaultValue={profile?.university}
                id="university"
                name="university"
                type="text"
                className="h-9 ps-3 w-full rounded-md focus:ring border-[1px] focus:ring-opacity-75 focus:ring-blue-400 border-gray-700 text-gray-900"
              />
            </div>
            <div className="col-span-full w-full text-left mt-3">
              <input
                type="submit"
                value="Save"
                className="px-3 py-1 bg-sky-500 hover:bg-sky-700 transition-all duration-300 rounded uppercase text-gray-50 cursor-pointer"
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Profile;
