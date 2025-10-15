import React, { useState } from "react";

import "./App.css";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Firebase/Firebase.init";

const googleProvider = new GoogleAuthProvider();
function App() {
  const [myUser, setMyUser] = useState(null);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result);
        setMyUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGoogleSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(">>>", result);
        setMyUser(null);
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <h1>Firebase</h1>
      <button onClick={handleGoogleSignIn}>Sign In with Google</button>
      <button onClick={handleGoogleSignOut}>Sign Out from Google</button>
      {myUser && (
        <>
          <h3>{myUser.displayName}</h3>
          <h3>{myUser.email}</h3>
        </>
      )}
    </>
  );
}

export default App;
