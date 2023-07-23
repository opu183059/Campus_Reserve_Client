/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../assets/firebase/firebase.config";

export const Authcontext = createContext(null);
const auth = getAuth(app);
const googleAuth = new GoogleAuthProvider();
const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [coleges, setColleges] = useState([]);
  const [searchCollege, setSearchCollege] = useState();
  const [search, setSearch] = useState();
  const [noDataMessage, setNoDataMessage] = useState("");
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signOuthandle = () => {
    return signOut(auth);
  };
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signWithGoogle = () => {
    return signInWithPopup(auth, googleAuth);
  };

  useEffect(() => {
    fetch("http://localhost:5000/all-college")
      .then((res) => res.json())
      .then((result) => {
        setColleges(result);
      });
  }, []);
  useEffect(() => {
    const unsubscrive = onAuthStateChanged(auth, (curentUser) => {
      // console.log("auath state change", curentUser);
      setUser(curentUser);
      setLoading(false);
    });
    return () => {
      unsubscrive();
    };
  }, []);
  const shareData = {
    user,
    loading,
    coleges,
    registerUser,
    signOuthandle,
    logIn,
    signWithGoogle,
    searchCollege,
    setSearchCollege,
    search,
    setSearch,
    noDataMessage,
    setNoDataMessage,
  };
  return (
    <Authcontext.Provider value={shareData}>{children}</Authcontext.Provider>
  );
};

export default Authprovider;
