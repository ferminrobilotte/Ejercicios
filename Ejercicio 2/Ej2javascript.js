function confirmarpagina(){
	var r = confirm("Usted quiere abandonar la pagina?");
	if (r==true){
		location.assing("https://www.google.com.ar");
	} else{
		return false;
	}
}