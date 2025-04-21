
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDHNhsfeyxfjNRsHN-jsT4tmw67tbCKhzU",
  authDomain: "wallpaper-a4c17.firebaseapp.com",
  projectId: "wallpaper-a4c17",
  storageBucket: "wallpaper-a4c17.firebasestorage.app",
  messagingSenderId: "1060711438390",
  appId: "1:1060711438390:web:51bd7c1d64c064d6b52097"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export Firebase auth and user state check
export { auth };

// Watch for auth state change
export const watchAuthState = (onLogin, onLogout) => {
  onAuthStateChanged(auth, (user) => {
    if (user && user.emailVerified) {
      onLogin(user);
    } else {
      onLogout();
    }
  });
};

// Logout helper
export const logout = async () => {
  await signOut(auth);
};
