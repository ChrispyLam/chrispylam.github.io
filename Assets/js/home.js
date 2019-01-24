$(document).ready(function() {
	$("#cover_video").bind("click", function() {
		$("#cover_video").get(0).play();
		if($("#cover_video").attr("controls"))
		{
			$("#cover_video").prop("controls", false);
			$("#cover").removeClass("theater");
			$("#cover_video").prop('muted', true);
		} else {
			$("#cover_video").attr("controls", "controls");
			$("#cover").addClass("theater");
			$("#cover_video").prop('volume', 0.25);
			$("#cover_video").prop('muted', false);
		}
	});
});