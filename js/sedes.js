function botonControlador__Sede(){
	/*	ESTADO INICIAL COORDINADO CON EL PORDEFECTO EN DESKTOP */
	document.getElementById("contenido__detalle").style.display="none";
	document.getElementById("contenido__mapa").style.display="block";
	document.getElementById("contenido__lista").style.display="flex";

	var btnControladores = document.getElementById("controles").getElementsByTagName("button");

	btnControladores[1].style.backgroundColor ="#E02C28";
	/***/
	btnControladores[0].addEventListener("click", function(){
		/*lista*/
		document.getElementById("contenido__mapa").style.display="none";
		document.getElementById("contenido__detalle").style.display="none";
		document.getElementById("contenido__lista").style.display="flex";
		btnControladores[1].style.backgroundColor ="#474747";
		btnControladores[0].style.backgroundColor ="#E02C28";
	});
	btnControladores[1].addEventListener("click", function(){
		/*Mapa*/
		document.getElementById("contenido__detalle").style.display="none";
		document.getElementById("contenido__lista").style.display="none";
		document.getElementById("contenido__mapa").style.display="block";
		btnControladores[0].style.backgroundColor ="#474747";
		btnControladores[1].style.backgroundColor ="#E02C28";
	});
}

function tamanoPantalla(){
	if(window.innerWidth<426){
		document.getElementById("contenido__lista").style.display="none";
		document.getElementById("contenido__detalle").style.display="none";
		document.getElementById("contenido__mapa").style.display="block";
		document.getElementById("controles").style.display="flex";
	} 
	else{
		document.getElementById("contenido__lista").style.display="flex";
		document.getElementById("contenido__detalle").style.display="none";
		document.getElementById("contenido__mapa").style.display="block";
		document.getElementById("controles").style.display="none";
	}
	
}

botonControlador__Sede();
tamanoPantalla();


/*
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
*/





























