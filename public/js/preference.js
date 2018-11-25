// Initiate firebase auth.
function initFirebaseAuth() {
	// Listen to auth state changes.
	firebase.auth().onAuthStateChanged(authStateObserver);
}

// Returns the signed-in user's display name.
function getUserName() {
	return firebase.auth().currentUser.displayName;
}

function getEmail() {
	return firebase.auth().currentUser.email;
}

function authStateObserver(user) {
	if (user) { // User is signed in!
		var userName = getUserName();
		var email = getEmail();

		userNameElement.textContent = userName;
		emailElement.textContent = email;
	}
}

// DOM
var userNameElement = document.getElementById("username");
var emailElement = document.getElementById("email");

// initialize Firebase
initFirebaseAuth();


$(document).ready(function () {
	$("input[type=radio][name=theme]").change(function () {
		if (this.id == "light_theme") {
			$("html").addClass("light");
			$(".info--preference").attr("src", "./image/Info-icon-black.png");
			$(".edit-icon--preference").attr("src", "./image/edit-button-black.png");
			$(".setting-button-img-nav-preference").attr("src", "./image/setting-icon-black.png");
			$(".close-button-img").attr("src", "./image/close-button-black.png");

		} else if (this.id == "dark_theme") {
			$("html").removeClass("light");
			$(".info--preference").attr("src", "./image/Info-icon.png");
			$(".edit-icon--preference").attr("src", "./image/edit-button.png");
			$(".setting-button-img-nav-preference").attr("src", "./image/setting-icon.png");
			$(".close-button-img").attr("src", "./image/close-button.png");
		}
	});
});