import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Authcontext } from "../../provider/Authprovider";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const Login = () => {
  const { logIn, signWithGoogle, user } = useContext(Authcontext);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [emailSet, setEmailSet] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    setErrorMessage("");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    logIn(email, password)
      .then((result) => {
        // eslint-disable-next-line no-unused-vars
        const loggedInUser = result.user;
        // console.log(loggedInUser);
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        let errrormessage = error.code.split("auth/")[1];
        setErrorMessage(errrormessage);
        setSuccessMessage(" ");
      });
  };
  const googleLogin = () => {
    signWithGoogle()
      .then((result) => {
        const loggeduser = result.user;
        console.log(loggeduser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const forgetPass = () => {
    sendPasswordResetEmail(auth, emailSet)
      .then(() => {
        setSuccessMessage(
          "Reset mail send please check your mail to reset pass"
        );
        setErrorMessage(" ");
      })
      .catch((error) => {
        let errrormessage = error.code.split("auth/")[1];
        setErrorMessage(errrormessage);
        setSuccessMessage(" ");
      });
  };

  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user]);

  return (
    <div className="pt-20">
      <div className="w-9/12 md:w-7/12 lg:w-6/12 mx-auto my-10">
        <div className="md:w-10/12 mx-auto w-full p-8 space-y-3 rounded-xl  bg-sky-50   text-gray-800">
          <h1 className="text-2xl font-bold text-center">Login</h1>
          <form
            onSubmit={handleLogin}
            noValidate=""
            action=""
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="relative z-0 w-full mb-6 group">
              <input
                onChange={(e) => {
                  setEmailSet(e.target.value);
                }}
                type="email"
                name="email"
                id="email"
                className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2  appearance-none     border-gray-600    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className="peer-focus:font-medium absolute text-sm     duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:  text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email
              </label>
            </div>
            <div className="space-y-1 text-sm">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2  appearance-none border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="password"
                  className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:  text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
              </div>
            </div>
            <p
              onClick={forgetPass}
              className="text-sm hover:text-blue-500 hover:underline cursor-pointer"
            >
              Forget Password
            </p>
            <button className="block w-full rounded-md p-3 text-center text-white bg-sky-600">
              Log in
            </button>
            <div className="errorMessage">
              <p className="text-red-500">{errorMessage}</p>
              <p className="text-green-500">{successMessage}</p>
            </div>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16   bg-gray-700"></div>
            <p className="px-3 text-sm">Login with social accounts</p>
            <div className="flex-1 h-px sm:w-16   bg-gray-700"></div>
          </div>
          <div className="flex justify-center space-x-4">
            <button
              onClick={googleLogin}
              aria-label="Login with Google"
              type="button"
              className="flex items-center justify-center w-60 p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1   border-gray-400 focus:ring-blue-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
              <p>Login with Google</p>
            </button>
          </div>
          <p className="text-xs text-center sm:px-6   ">
            Dont have an account?
            <Link
              to={"/registration"}
              className="text-sm ml-1 hover:text-blue-500 font-semibold underline"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
