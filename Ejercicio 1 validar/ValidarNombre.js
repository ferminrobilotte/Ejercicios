function validar() {
	var nombre = document.getElementById("nombre");
	var edad = document.getElementById("edad");

	if(nombre.value==""){
		alert("Espacio nombre vacio");
	};
	if(edad.value<18){
		alert("Edad menor a 18")
	};
	mostrarocultar();
}
function mostrar(trabajo){
	document.getElementById("trabajo").style.display="block";
}

function ocultar(trabajo){
	document.getElementById("trabajo").style.display="none";
}

function mostrarocultar(){
	var b = document.getElementById("hombre");
	if(b.value=="1"){
		Mostar(document.getElementById("trabajohombre"));
	}

}