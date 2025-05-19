Projeto: "Raízes Conectadas"

Descrição: Um site/app interativo que promove a celebração da conexão entre o campo e a cidade, valorizando a cultura rural e urbana, a troca de saberes e a sustentabilidade. O projeto pode mapear eventos, histórias, receitas tradicionais, artes e iniciativas que unem moradores do campo e da cidade em uma experiência cultural e educacional conjunta.

Funcionalidades principais:

Mapa interativo com eventos locais e feiras que promovem produtos do campo na cidade.
Seção de histórias e depoimentos em vídeo sobre a convivência e colaboração campo-cidade.
Biblioteca de receitas típicas que combinam ingredientes do campo com a rotina da cidade.
Calendário de festivais e celebrações regionais.
Área para trocar dicas sustentáveis, como cultivo urbano e práticas agroecológicas.
Fórum para conectar pessoas do campo e da cidade para parcerias, trocas e aprendizado.

Visual: Um design moderno, rústico e acolhedor, com cores terra, verdes e azuis, mesclando elementos naturais e urbanos para refletir a união dos dois mundos.


# **Códigos para o Protótipo "Raízes Conectadas"**  

Vou criar uma estrutura básica usando **HTML, CSS e JavaScript** para o protótipo do site. Também incluirei um exemplo de integração com um mapa interativo (usando a API do Leaflet) e um formulário funcional.  

---

## **1. Estrutura Básica (HTML + CSS)**  
Arquivo: **`index.html`**  
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Raízes Conectadas | Campo e Cidade</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Cabeçalho -->
    <header>
        <div class="logo">
            <img src="logo.png" alt="Raízes Conectadas">
        </div>
        <nav>
            <ul>
                <li><a href="#home">Início</a></li>
                <li><a href="#mapa">Mapa</a></li>
                <li><a href="#historias">Histórias</a></li>
                <li><a href="#receitas">Receitas</a></li>
                <li><a href="#forum">Fórum</a></li>
            </ul>
        </nav>
    </header>

    <!-- Página Inicial (Hero Section) -->
    <section id="home" class="hero">
        <div class="hero-content">
            <h1>Raízes Conectadas</h1>
            <p>Do campo à cidade, uma só comunidade.</p>
            <div class="buttons">
                <a href="#mapa" class="btn">Explorar Mapa</a>
                <a href="#historias" class="btn">Contar uma História</a>
            </div>
        </div>
    </section>

    <!-- Mapa Interativo -->
    <section id="mapa" class="map-section">
        <h2>Encontre Feiras e Eventos</h2>
        <div id="map"></div>
    </section>

    <!-- Seção de Histórias -->
    <section id="historias" class="stories-section">
        <h2>Histórias que Inspiram</h2>
        <div class="stories-grid">
            <div class="story-card">
                <img src="story1.jpg" alt="Agricultor urbano">
                <h3>Como comecei minha horta no apartamento</h3>
                <button class="btn">Assistir</button>
            </div>
            <div class="story-card">
                <img src="story2.jpg" alt="Feira comunitária">
                <h3>A feira que uniu nosso bairro</h3>
                <button class="btn">Ler mais</button>
            </div>
        </div>
    </section>

    <!-- Rodapé -->
    <footer>
        <p>© 2024 Raízes Conectadas | Projeto de integração campo-cidade</p>
    </footer>

    <!-- Scripts -->
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
    <script src="script.js"></script>
</body>
</html>
```

---

## **2. Estilização Básica (CSS)**  
Arquivo: **`styles.css`**  
```css
/* Reset e Fontes */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

body {
    background-color: #F4F1DE;
    color: #3D405B;
}

/* Cabeçalho */
header {
    background-color: #81B29A;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav ul {
    display: flex;
    list-style: none;
    gap: 1.5rem;
}

nav a {
    color: #F4F1DE;
    text-decoration: none;
    font-weight: bold;
}

/* Hero Section */
.hero {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                url('background.jpg');
    background-size: cover;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
}

.hero-content h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.buttons {
    margin-top: 2rem;
    display: flex;
    gap: 1rem;
    justify-content: center;
}

.btn {
    background-color: #E07A5F;
    color: white;
    padding: 0.8rem 1.5rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
}

/* Mapa */
.map-section {
    padding: 3rem;
    text-align: center;
}

#map {
    height: 400px;
    width: 80%;
    margin: 2rem auto;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

/* Histórias */
.stories-section {
    padding: 3rem;
    text-align: center;
}

.stories-grid {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
}

.story-card {
    background: white;
    border-radius: 10px;
    overflow: hidden;
    width: 300px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.story-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.story-card h3 {
    padding: 1rem;
}

/* Rodapé */
footer {
    background-color: #3D405B;
    color: white;
    text-align: center;
    padding: 1.5rem;
}
```

---

## **3. Mapa Interativo (JavaScript + Leaflet)**  
Arquivo: **`script.js`**  
```javascript
// Inicializa o Mapa
const map = L.map('map').setView([-15.7942, -47.8825], 12); // Coordenadas de Brasília (exemplo)

// Adiciona o mapa base (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Adiciona marcadores de exemplo (feiras, eventos)
const feiraMarker = L.marker([-15.7942, -47.8825]).addTo(map);
feiraMarker.bindPopup("<b>Feira da Torre</b><br>Produtos orgânicos toda sexta.").openPopup();

const eventoMarker = L.marker([-15.8000, -47.8900]).addTo(map);
eventoMarker.bindPopup("<b>Workshop de Agricultura Urbana</b><br>Dia 25/05, 14h.");

// Simulação de busca de eventos (poderia ser uma API real)
fetch('https://api.example.com/eventos')
    .then(response => response.json())
    .then(data => {
        data.forEach(evento => {
            L.marker([evento.lat, evento.lng])
                .addTo(map)
                .bindPopup(`<b>${evento.nome}</b><br>${evento.descricao}`);
        });
    });
```

---

## **4. Funcionalidade de Formulário (Exemplo: Enviar História)**  
Adicione ao **`index.html`**:  
```html
<section id="enviar-historia" class="form-section">
    <h2>Conte sua história</h2>
    <form id="story-form">
        <input type="text" placeholder="Seu nome" required>
        <input type="email" placeholder="Seu e-mail" required>
        <textarea placeholder="Sua história..." required></textarea>
        <button type="submit" class="btn">Enviar</button>
    </form>
</section>
```

Adicione ao **`script.js`**:  
```javascript
document.getElementById('story-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Obrigado por compartilhar sua história! Em breve ela será publicada.');
    this.reset();
});
```

---

## **5. Como Executar**  
1. Crie uma pasta com os arquivos:  
   - `index.html`  
   - `styles.css`  
   - `script.js`  
   - Imagens (`logo.png`, `background.jpg`, etc.)  
2. Abra o `index.html` no navegador.  
3. O mapa funcionará se você estiver online (usa OpenStreetMap).  

---

### **Próximas Melhorias**  
- **Backend (Node.js + MongoDB)** para salvar histórias, receitas e eventos.  
- **Login de usuários** (ex.: agricultores podem cadastrar feiras).  
- **API de receitas** (ex.: TheMealDB para inspiração).  

Quer que eu desenvolva alguma parte específica com mais detalhes? 😊
