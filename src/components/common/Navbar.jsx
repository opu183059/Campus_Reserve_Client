import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const logout = () => {
    console.log("Logout clicked");
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
                <Link to={"/registration"}>Colleges</Link>
              </li>

              <li>
                <Link to={"/dashboard"}>Admission</Link>
              </li>
              <li>
                <Link to={"/dashboard"}>My College</Link>
              </li>
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
          <div className="font-medium text-base flex">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? " text-blue-700  font-bold block px-4 py-2 hover:bg-blue-600 hover:text-gray-50 transition-all duration-300 rounded-md"
                  : "block px-4 py-2 text-gray-800  hover:text-gray-100 hover:bg-blue-600 transition-all duration-300 rounded-md"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/registration"
              className={({ isActive }) =>
                isActive
                  ? " text-blue-700  font-bold block px-4 py-2 hover:bg-blue-600 hover:text-gray-50 transition-all duration-300 rounded-md"
                  : "block px-4 py-2 text-gray-800  hover:text-gray-100 hover:bg-blue-600 transition-all duration-300 rounded-md"
              }
            >
              Colleges
            </NavLink>

            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? " text-blue-700  font-bold block px-4 py-2 hover:bg-blue-600 hover:text-gray-50 transition-all duration-300 rounded-md"
                  : "block px-4 py-2 text-gray-800  hover:text-gray-100 hover:bg-blue-600 transition-all duration-300 rounded-md"
              }
            >
              Admission
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? " text-blue-700  font-bold block px-4 py-2 hover:bg-blue-600 hover:text-gray-50 transition-all duration-300 rounded-md"
                  : "block px-4 py-2 text-gray-800  hover:text-gray-100 hover:bg-blue-600 transition-all duration-300 rounded-md"
              }
            >
              My Colleges
            </NavLink>
          </div>
        </div>
        <div className="navbar-end">
          <>
            <h1 className="mr-1 font-semibold text-base border-2 px-3 py-1 rounded-md">
              Name
            </h1>
            <button
              onClick={logout}
              className="text-base font-normal px-3 py-1 bg-sky-500 hover:bg-sky-700 transition-all duration-300 rounded-md uppercase text-gray-50 "
            >
              Log out
            </button>
          </>

          {/* <Link
            to={"/login"}
            className="text-base font-normal px-3 py-1 bg-sky-500 hover:bg-sky-700 transition-all duration-300 rounded-md uppercase text-gray-50 "
          >
            Login
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
