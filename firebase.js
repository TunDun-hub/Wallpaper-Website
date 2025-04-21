
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import {
  getAuth,
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDHNhsfeyxfjNRsHN-jsT4tmw67tbCKhzU",
  authDomain: "wallpaper-a4c17.firebaseapp.com",
  projectId: "wallpaper-a4c17",
  storageBucket: "wallpaper-a4c17.firebasestorage.app",
  messagingSenderId: "1060711438390",
  appId: "1:1060711438390:web:51bd7c1d64c064d6b52097"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

export const checkUsernameExists = async (username) => {
  const docRef = doc(db, "usernames", username);
  const docSnap = await getDoc(docRef);
  return docSnap.exists();
};

export const registerUsername = async (uid, username, email) => {
  await setDoc(doc(db, "usernames", username), { uid: uid });
  await setDoc(doc(db, "users", uid), {
    username: username,
    email: email,
    created_at: new Date()
  });
};
