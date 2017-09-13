function invertir(cadena) {
  	var x = cadena.length;
  	var cadenaInvertida = "";
 
  	while (x>=0) {
    	cadenaInvertida = cadenaInvertida + cadena.charAt(x);
    	x--;
  	}
  	return cadenaInvertida;
}


function palindromo(){
	var t = document.getElementById("texto");
	var j = t.value;
	var invertida = invertir(t.value);
	var esinvertida=true;
	var x = j.length;
	while(x>=0 && esinvertida==true){
		if(j.charAt(x)==invertida.charAt(x)){
			esinvertida=true
		}else{
			esinvertida=false
		}
		x--;
	};
	if(esinvertida==false){
		alert("la frase no se lee igual")
	}else{
		alert("la frase se lee igual")
	}
	
}

