//Load all current pictures default
$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?", 
function(images, i) {
	var photos = "";
	$.each(images.items, function(i, item) {
		photos = "<a class=imageLink href='" + item.link +"'>" + "<img id=img" + i + " src='" + item.media.m + "'></a>";
		$("#gallery").append(photos);
	});

});

// Search function
$("#searchButton").click(function(){
	$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
	{	tags   : $("#searchInput").val(),
		format : "json"
	},
	function(search, i) {
		var photos = "";
		$.each(search.items, function(i, item){
			photos += "<a class=imageLink href='" + item.link +"'>" + "<img id=img" + i + " src='" + item.media.m + "'></a>";
		});
		$("#gallery").html(photos);
	});
	$('#searchInput').val("");
});
