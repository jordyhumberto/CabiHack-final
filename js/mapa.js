/*
function initMap() {
  var uluru = {lat: -25.363, lng: 131.044};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

*/
/*
document.getElementById("btnUbicacion").addEventListener("click", function(){
		var output = document.getElementById('map');
		navigator.geolocation.getCurrentPosition (fn_ok, fn_error);
		function fn_error(){
			alert("hola mundo");
		}
		function fn_ok(rta){
			var lat = rta.coords.latitude;
			var lon = rta.coords.longitude;

		//	var gLatLon = new google.maps.LatLng(lat, lon);

			var objConfig = {
				zoom: 10,
				center: {lat: -34.397, lng: 150.644}
			}
			var gMapa = new google.maps.Map(output, objConfig);
		}

	/*	PRIMERA FORMA

	var output = document.getElementById('map');

	// VERIFICA SI SOPORTA GEOLOCALIZACIÓN
	if (navigator.geolocation){
		output.innerHTML = "<p>Tu navegador soporta Geolocalización</p>";
	}
	else{
		output.innerHTML = "<p style='color: white;'>Tu navegador NO soporta Geolocalización</p>";
	}
	// OBTENEMOS LATITUD Y LONGITUD
	function localizacion(posicion){
		var latitude = posicion.coords.latitude;
		var longitude = posicion.coords.longitude;

		var imgURL = "https://maps.googleapis.com/maps/api/staticmap?center="+latitude+","+longitude+"&size=600x300&markers=color:red%7C"+latitude+","+longitude+"&key=AIzaSyA98VtfOSYhleVPWWQlu_8xqNOCSg1wcRc";

		output.innerHTML = "<img src='"+imgURL+"'>"
		//output.innerHTML = "<p style='color: white;'>Latitud: "+latitude+"</p><br><p style='color: white;'>Longitude: "+longitude+"</p>";
	}
		
	function errorxd(){
		output.innerHTML = "<p style='color: white;'>No se pudo obtener tu ubicación</p>";
	}


	navigator.geolocation.getCurrentPosition(localizacion, errorxd);

	*/
/*
}); 