function init() {
    var map = L.map('mapid').setView([51.09378, 17.00666], 19);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.09378, 17.00666]).addTo(map);
}