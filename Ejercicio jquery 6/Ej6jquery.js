$(function(){
	$("#check").on({
		click: function(){
			$("#bt").css("display","block");
		},
		dblclick: function(){
			$("#bt").css("display","none")
		}
	})
});