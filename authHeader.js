
  import { auth } from './firebase.js';
  import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js';

  const loginBtn = document.querySelector('#login-btn');
  if (loginBtn) {
    onAuthStateChanged(auth, user => {
      if (user) {
        const img = document.createElement('img');
        img.src = user.photoURL || 'https://www.gravatar.com/avatar?d=mp&s=32';
        img.alt = 'Profile';
        img.style.width = '32px';
        img.style.height = '32px';
        img.style.borderRadius = '50%';
        img.style.objectFit = 'cover';
        img.style.cursor = 'pointer';

        const link = document.createElement('a');
        link.href = 'user-profile.html';
        link.id = 'profile-pic';
        link.appendChild(img);

        loginBtn.replaceWith(link);
      }
    });
  }
