
var tileLayer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> Contributors'
});

//remember last position
var rememberLat = -2; //document.getElementById('latitude').value;
var rememberLong = -80; //document.getElementById('longitude').value;
if( !rememberLat || !rememberLong ) { rememberLat = -2.19616; rememberLong = -79.88621;}

var map = new L.Map('map', {
'center': [rememberLat, rememberLong],
'zoom': 12,
'layers': [tileLayer]
});

var marker = L.marker([rememberLat, rememberLong],{
draggable: true
}).addTo(map);

marker.on('dragend', function (e) {
	updateLatLng(marker.getLatLng().lat, marker.getLatLng().lng);
});

map.on('click', function (e) {
	marker.setLatLng(e.latlng);
	updateLatLng(marker.getLatLng().lat, marker.getLatLng().lng);
});

function updateLatLng(lat,lng,reverse) {
	if(reverse) {
		marker.setLatLng([lat,lng]);
		map.panTo([lat,lng]);
	} else {
	document.getElementById('latitude').value = marker.getLatLng().lat;
	document.getElementById('longitude').value = marker.getLatLng().lng;
	map.panTo([lat,lng]);
	}
}

