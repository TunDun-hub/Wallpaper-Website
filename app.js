
import { auth, checkUsernameExists, registerUsername } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

document.getElementById("signup").addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCred = await createUserWithEmailAndPassword(auth, email, password);
    await sendEmailVerification(userCred.user);
    alert("Verification email sent. Please check your inbox.");
  } catch (error) {
    alert(error.message);
  }
});

onAuthStateChanged(auth, (user) => {
  if (user && user.emailVerified) {
    document.getElementById("username-section").style.display = "block";
  }
});

document.getElementById("submit-username").addEventListener("click", async () => {
  const username = document.getElementById("username").value.trim();
  if (await checkUsernameExists(username)) {
    alert("Username already taken. Try another.");
    return;
  }

  const uid = auth.currentUser.uid;
  await registerUsername(uid, username, auth.currentUser.email);
  alert("Username registered!");
});
