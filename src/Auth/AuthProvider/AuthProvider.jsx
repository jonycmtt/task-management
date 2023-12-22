import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../../firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const provider = new GoogleAuthProvider()

    const googleSignIn = () => {
      return signInWithPopup(auth,provider)
  }

  const userSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name,photo) => {
    return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo
    })
  }
  const userLogout = () => {
    return signOut(auth);
  };

  
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user is :", currentUser);
        setUser(currentUser);
        setLoading(false)
      return () => {
        unSubscribe();
      };
    });
  }, []);

  const authInfo = {
    userSignUp,
    userLogin,
    userLogout,
    user,
    loading,
    setLoading,
    updateUserProfile,
    googleSignIn,
    name: "kony",
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
