function posts(callback) {
	$.ajax({
		url: "php/posts.php",

		complete: function(res) {

			var json = res.responseText;
			var posts = JSON.parse(json);

			callback(posts);

		}
	})
}