$(function(){
	$("img").hover(function(){
		$("#img").stop().fadeToggle(1000);
	},
		function(){
			$("#img").stop().fadeToggle(500);
		})
})