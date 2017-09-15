$(function(){
	$("p").each(function(i){
		switch(i){
		case 0:
			$(this).css("color","green");
			break;
		case 1:
			$(this).css("color","red");
			break;
		case 2:
			$(this).css("color","blue");
			break;
		case 3:
			$(this).css("color","yellow");
		default:
			;	
		}
	});
});