const map = L.map('map').setView([20.9982, 107.0448], 3);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18
}).addTo(map);

const vn = [21.0285, 105.8542]; // Hanoi, Vietnam
const it = [41.9028, 12.4964];  // Rome, Italy

const airplaneIcon = L.icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/3448/3448609.png',
  iconSize: [40, 40],
  iconAnchor: [20, 20]
});

let marker = L.marker(vn, {icon: airplaneIcon}).addTo(map);
let steps = 200;
let current = 0;

function interpolate(start, end, step, maxStep) {
  return start + (end - start) * (step / maxStep);
}

let interval = setInterval(() => {
  if (current >= steps) {
    clearInterval(interval);
    document.getElementById("letter").style.display = "block";
    return;
  }
  let lat = interpolate(vn[0], it[0], current, steps);
  let lng = interpolate(vn[1], it[1], current, steps);
  marker.setLatLng([lat, lng]);
  current++;
}, 50);