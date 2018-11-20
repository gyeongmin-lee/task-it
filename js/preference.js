$(document).ready(function() {
	$("input[type=radio][name=theme]").change(function() {
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