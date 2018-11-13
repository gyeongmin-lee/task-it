$(document).ready(function() {
	$("input[type=radio][name=theme]").change(function() {
		if (this.id == "light_theme") {
			$("html").addClass("light");
			$(".info--preference").attr("src", "./image/Info-icon-black.png");
		} else if (this.id == "dark_theme") {
			$("html").removeClass("light");
			$(".info--preference").attr("src", "./image/Info-icon.png");
		}
	});
});