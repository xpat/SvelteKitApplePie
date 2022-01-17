this helped get me past the auth.signOut (only option)
https://firebase.google.com/docs/reference/js/auth.googleauthprovider
example 2  // Sign in using a popup.
const provider = new GoogleAuthProvider();
provider.addScope('profile');
provider.addScope('email');
const result = await signInWithPopup(auth, provider);


This 4 part video helped:  https://www.youtube.com/watch?v=GS19Qw2QTzQ&list=PLm_Qt4aKpfKhEzGutYRnqBOBgJ6WayTVg&index=2&ab_channel=WebJeda

