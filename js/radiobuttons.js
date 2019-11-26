$("#daybutton").click(function () {
	console.log("Day");
	$('#daycalendar').show();
	$('#weekcalendar').hide();
	$('#monthcalendar').hide();
});

$("#weekbutton").click(function () {
	console.log("Week");
	$('#daycalendar').hide();
	$('#weekcalendar').show();
	$('#monthcalendar').hide();
});

$("#monthbutton").click(function () {
	console.log("Month");
	$('#daycalendar').hide();
	$('#weekcalendar').hide();
	$('#monthcalendar').show();
});