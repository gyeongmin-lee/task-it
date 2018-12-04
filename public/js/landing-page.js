function signIn() {
    // Sign in Firebase using popup auth and Google as the identity provider.
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);

}

// Redirect to main page after login
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        window.location = 'main.html';
    }
});



// DOM ELEMENTS
var signInButtonElement = document.querySelector('.button-signin');

signInButtonElement.addEventListener('click', signIn);