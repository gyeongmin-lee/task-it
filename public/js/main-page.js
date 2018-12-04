// Hides group when hide button is clicked
$(document).ready(function () {
	$("#exit--setB").on("click", function(e) {
		$("#setB").hide();
	});
	
	$("#exit--setC").on("click", function(e) {
		$("#setC").hide();
	});
	
	$("#exit--tacos").on("click", function(e) {
		$("#tacos").hide();
	});
});