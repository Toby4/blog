$(document).ready(function() {

	$("h1").lettering();
	$("h1").fitText();

	posts(function(posts) {

		$("#posts").html("");

		posts.forEach(function(post) {
			var html;
			html = 
				"<div class='post animated bounceInUp'>" + 
				"<h2>" + post.title + "</h2>" + 
				"<p>" + post.content + "</p>" +
				"</div>";
			$("#posts").html($("#posts").html() + html);
		});

		$("#posts").children().each(function() {
			$($(this).children()[0]).fitText(4);
			$($(this).children()[1]).fitText(5);
		});

	});



});