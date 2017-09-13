function caracteres(){
	var t = document.getElementById("texto");
	var j = t.value;
	var	x = j.length;
	var count = 80-x;
	if (count < 0) { 
		document.getElementById(counter).innerHTML = "<span style=\"color: red;\">" + count + "</span>"; 
	}else { 
		document.getElementById(counter).innerHTML = count; 
  	}
}