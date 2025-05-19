const map = L.map('map').setView([-15.7942, -47.8825], 12); // Coordenadas de Brasília (exemplo)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const feiraMarker = L.marker([-15.7942, -47.8825]).addTo(map);
feiraMarker.bindPopup("<b>Feira da Torre</b><br>Produtos orgânicos toda sexta.").openPopup();

const eventoMarker = L.marker([-15.8000, -47.8900]).addTo(map);
eventoMarker.bindPopup("<b>Workshop de Agricultura Urbana</b><br>Dia 25/05, 14h.");

fetch('https://api.example.com/eventos')
    .then(response => response.json())
    .then(data => {
        data.forEach(evento => {
            L.marker([evento.lat, evento.lng])
                .addTo(map)
                .bindPopup(`<b>${evento.nome}</b><br>${evento.descricao}`);
        });
    });

document.getElementById('story-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Obrigado por compartilhar sua história! Em breve ela será publicada.');
    this.reset();
});