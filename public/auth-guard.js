// auth-guard.js

firebase.auth().onAuthStateChanged((user) => {
  if (!user || user.providerData.length === 0) {
    // Oturum yok veya anonim kullanıcı → login sayfasına yönlendir
    window.location.href = "login.html";
  }
});
