import { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, setDoc, doc } from "./firebase.js";
import { logAction } from "./logger.js";

export function registerUser(email, password, role) {
  createUserWithEmailAndPassword(auth, email, password)
    .then(user => {
      setDoc(doc(db, "users", user.user.uid), { email, role });
      logAction("REGISTER", email);
      alert("Registered Successfully");
    })
    .catch(err => alert(err.message));
}

export function loginUser(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      logAction("LOGIN", email);
      alert("Login Successful");
    })
    .catch(err => alert(err.message));
}
