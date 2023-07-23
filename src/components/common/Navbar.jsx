import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Authcontext } from "../provider/Authprovider";

const Navbar = () => {
  const { signOuthandle, user } = useContext(Authcontext);

  const Logout = () => {
    signOuthandle()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="navbar bg-base-100 z-50 fixed shadow-md px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>

              <li>
                <Link to={"/colleges"}>Colleges</Link>
              </li>

              <li>
                <Link to={"/admission"}>Admission</Link>
              </li>
              {user && (
                <li>
                  <Link to={"/myCollege"}>My College</Link>
                </li>
              )}
            </ul>
          </div>
          <Link to="/" className="icon flex items-center">
            <img
              src="https://i0.wp.com/www.charlestonsouthern.edu/wp-content/uploads/AF-Symbol.jpg?resize=1024%2C913&ssl=1"
              alt=""
              className="w-7"
            />
            <div className="relative font-bold ml-2">
              <p className="absolute -top-5">Campus</p>
              <p className="absolute -top-1 text-sky-800">Reserve</p>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="font-semibold text-base flex">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? " text-blue-700  block px-4 py-2 transition-all duration-300 rounded-md"
                  : "block px-4 py-2 text-gray-800  hover:text-blue-700 transition-all duration-300 rounded-md"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/colleges"
              className={({ isActive }) =>
                isActive
                  ? " text-blue-700  block px-4 py-2 transition-all duration-300 rounded-md"
                  : "block px-4 py-2 text-gray-800  hover:text-blue-700 transition-all duration-300 rounded-md"
              }
            >
              Colleges
            </NavLink>

            <NavLink
              to="/admission"
              className={({ isActive }) =>
                isActive
                  ? " text-blue-700  block px-4 py-2 transition-all duration-300 rounded-md"
                  : "block px-4 py-2 text-gray-800  hover:text-blue-700 transition-all duration-300 rounded-md"
              }
            >
              Admission
            </NavLink>
            {user && (
              <NavLink
                to="/myCollege"
                className={({ isActive }) =>
                  isActive
                    ? " text-blue-700  block px-4 py-2 transition-all duration-300 rounded-md"
                    : "block px-4 py-2 text-gray-800  hover:text-blue-700 transition-all duration-300 rounded-md"
                }
              >
                My Colleges
              </NavLink>
            )}
          </div>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <button className="mr-1 text-base font-normal px-3 py-1 hover:bg-sky-700 transition-all duration-300 rounded-md uppercase text-black border-[1px] border-sky-600 hover:text-gray-50 ">
                {user?.displayName}
              </button>
              <button
                onClick={Logout}
                className="text-base font-normal px-3 py-1 bg-sky-500 hover:bg-sky-700 transition-all duration-300 rounded-md uppercase text-gray-50 "
              >
                Log out
              </button>
            </>
          ) : (
            <Link
              to={"/login"}
              className="text-base font-normal px-3 py-1 bg-sky-500 hover:bg-sky-700 transition-all duration-300 rounded-md uppercase text-gray-50 "
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
