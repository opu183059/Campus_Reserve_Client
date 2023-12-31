import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/home/home.jsx";
import Error from "./components/common/Error.jsx";
import Colleges from "./components/pages/colleges/Colleges.jsx";
import Admission from "./components/pages/admission/Admission.jsx";
import Authprovider from "./components/provider/Authprovider.jsx";
import Login from "./components/pages/login&registration/Login.jsx";
import Registration from "./components/pages/login&registration/Registration.jsx";
import CollegeInformation from "./components/pages/colleges/CollegeInformation.jsx";
import AdmissionSelect from "./components/pages/admission/AdmissionSelect.jsx";
import Mycollege from "./components/pages/mycollege/Mycollege.jsx";
import Profile from "./components/pages/profile/Profile.jsx";
import PrivateRoute from "./components/privateroute/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/colleges",
        element: <Colleges></Colleges>,
      },
      {
        path: "/college-information/:id",
        element: (
          <PrivateRoute>
            <CollegeInformation></CollegeInformation>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://campus-reserve-server-gamma.vercel.app/college-information/${params.id}`
          ),
      },
      {
        path: "/admission",
        element: <Admission></Admission>,
      },
      {
        path: "/admission-book/:id",
        element: (
          <PrivateRoute>
            <AdmissionSelect></AdmissionSelect>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://campus-reserve-server-gamma.vercel.app/college-information/${params.id}`
          ),
      },
      {
        path: "/myCollege",
        element: (
          <PrivateRoute>
            <Mycollege></Mycollege>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/profile/:email",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Authprovider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Authprovider>
);
