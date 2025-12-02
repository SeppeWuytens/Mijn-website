
let map = L.map('MapW').setView([51.225476, 4.514216], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//let bounds = [[51.23041, 4.4155], [51.22991, 4.41675]];


L.rectangle(bounds, { color: "#dd0b0b", weight: 1 }).addTo(map);

let apMarker = L.marker([51.23009, 4.41616]).addTo(map);
apMarker.bindPopup("<b>AP-Hogeschool</b><br>Ellermanstraat 33").openPopup();