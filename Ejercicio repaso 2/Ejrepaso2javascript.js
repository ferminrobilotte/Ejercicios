function ej2(){
	var t = Math.floor(Math.random() * (3 - 0)) + 0;
	switch(t){
		case 0:
			location.assign("https://www.live.com/");
			break;
		case 1:
			location.assign("https://www.gmail.com");
			break;
		case 2:
			location.assign("https://www.yahoo.com");
			break;
		default:
			;	
	}
}