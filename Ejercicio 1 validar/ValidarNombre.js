function validar() {
	var nombre = document.getElementById("nombre");
	var edad = document.getElementById("edad");

	if(nombre.value==""){
		alert("Espacio nombre vacio");
	};
	if(edad.value<18){
		alert("Edad menor a 18")
	};
	
}
function mostrar(trabajo){
	trabajo.style.display="block";
}

function ocultar(trabajo){
	trabajo.style.display="none";
}

function mostrarocultar(){
	var s = document.getElementById("sexo")
	if (s.value=="1"){
		mostrar(document.getElementById("trabajohombre"));
		ocultar(document.getElementById("trabajomujer"));
	} else{
		mostrar(document.getElementById("trabajomujer"));
		ocultar(document.getElementById("trabajohombre"));
	}
}