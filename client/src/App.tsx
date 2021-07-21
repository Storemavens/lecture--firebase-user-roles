import React from "react";
import "./App.css";
import { useAuth } from "./auth/auth.state";
import SignIn from "./auth/SignIn.component";
import SignOut from "./auth/SignOut.component";
import { FirebaseUser } from "./vendor/firebase";

const SignedInView = ({ user }: { user: FirebaseUser }) => {
  return (
    <div className="SignedInView">
      <h1>Signed in as: {user?.displayName}</h1>
      <SignOut />
      <pre>{JSON.stringify(user?.toJSON(), null, 2)}</pre>
    </div>
  );
};

const NotSignedInView = () => {
  return (
    <div className="NotSignedInView">
      <h1>Not Signed In</h1>
      <SignIn />
    </div>
  );
};
function App() {
  const { isSignedIn, user } = useAuth();
  return (
    <div className="App">
      {isSignedIn ? <SignedInView user={user} /> : <NotSignedInView />}
    </div>
  );
}

export default App;