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

var user = firebase.auth().currentUser;

if (user) {
  console.log(user.displayName);
} else {
	console.log("no user!");
}

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
			$(".info--preference").attr("src", "./image/info-icon.png");
			$(".edit-icon--preference").attr("src", "./image/edit-button.png");
			$(".setting-button-img-nav-preference").attr("src", "./image/setting-icon.png");
			$(".close-button-img").attr("src", "./image/close-button.png");
		}
	});
	
	 var changename = function () {
        var $input = $("<input>", {
            val: $(userNameElement).text(),
            type: "text"
        });
		$input.addClass("content--preference");
        $input.addClass("textbox--preference");
		$input.attr("id", "username");
        $("#username").replaceWith($input);
        $input.on("blur", savename);
        $input.select();
    };
	
	
    var savename = function () {
        var $span = $("<span>", {
            text: $("#username").val()
        });
        $span.addClass("content--preference");
		$span.attr("id", "username");
        $("#username").replaceWith($span);
        $("#edit-username--preference").on("click", changename);
    }
	
	var changeemail = function () {
        var $input = $("<input>", {
            val: $(emailElement).text(),
            type: "text"
        });
		$input.addClass("content--preference");
        $input.addClass("textbox--preference");
		$input.attr("id", "email");
        $("#email").replaceWith($input);
        $input.on("blur", saveemail);
        $input.select();
    };
	
	var saveemail = function () {
        var $span = $("<span>", {
            text: $("#email").val()
        });
        $span.addClass("content--preference");
		$span.attr("id", "email");
        $("#email").replaceWith($span);
        $("#edit-email--preference").on("click", changeemail);
		
    }
	
    $("#edit-username--preference").on("click", changename);
    $("#edit-email--preference").on("click", changeemail);
	
	
	$("#savebutton").on("click", function() {
		var user = firebase.auth().currentUser;
		user.updateProfile({
			displayName: $("#username").text()
		});
		console.log("name changed");
		user.updateEmail($("#email").text()).then(function() {
			console.log("emailchanged");
		}).catch(function(error) {
			console.log("error");
		});
		//window.location.href = "./main.html";
	});

});
	
