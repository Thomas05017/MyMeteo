# Weather App

Un'applicazione meteo moderna e responsiva che combina Laravel (backend) e Angular (frontend) per fornire previsioni meteo in tempo reale.

## 📋 Descrizione

Weather App è un'applicazione full-stack che consente agli utenti di cercare le condizioni meteorologiche attuali per qualsiasi città nel mondo. L'applicazione utilizza l'API OpenWeatherMap per recuperare dati meteo accurati e aggiornati.

### Caratteristiche principali

- 🌤️ Visualizzazione condizioni meteo in tempo reale
- 🔍 Ricerca città con interfaccia intuitiva
- 📊 Dettagli completi: temperatura, umidità, vento, pressione e visibilità
- 🎨 Design moderno e responsivo con Material Design
- 🌙 Icone dinamiche che cambiano in base alle condizioni meteo
- 📱 Completamente responsive per mobile, tablet e desktop

## 🏗️ Architettura

### Backend (Laravel)
- **Framework**: Laravel 12
- **Database**: SQLite
- **API**: OpenWeatherMap
- **Containerizzazione**: Docker

### Frontend (Angular)
- **Framework**: Angular 20
- **UI Library**: Angular Material
- **Styling**: SCSS

## 🚀 Installazione e Avvio

### Prerequisiti

- Docker e Docker Compose
- Node.js (v18 o superiore)
- npm
- Account OpenWeatherMap (per la API key)

### 1. Backend Setup

```bash
# Naviga nella directory del backend
cd backend/app

# Installa le dipendenze PHP con Docker
docker run --rm -u "$(id -u):$(id -g)" -v "$PWD":/work -w /work composer install

# Copia il file di configurazione
cp .env.example .env

# Aggiungi la tua API key di OpenWeatherMap nel file .env
# WEATHER_API_KEY=tua_api_key_qui

# Avvia i container Docker
docker compose up -d --build

# Genera la chiave dell'applicazione
docker compose exec app php artisan key:generate

# Esegui le migrazioni del database
docker compose exec app php artisan migrate
```

Il backend sarà disponibile su `http://localhost:8000`

### 2. Frontend Setup

```bash
# Naviga nella directory del frontend
cd frontend

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm start
```

Il frontend sarà disponibile su `http://localhost:4200`

## 🔑 Configurazione API Key

1. Registrati su [OpenWeatherMap](https://openweathermap.org/)
2. Ottieni la tua API key gratuita
3. Aggiungi la key nel file `backend/app/.env`:
   ```
   WEATHER_API_KEY=tua_api_key_qui
   ```

## 📁 Struttura del Progetto

```
.
├── backend/
│   └── app/
│       ├── app/
│       │   └── Http/
│       │       └── Controllers/
│       │           └── WeatherController.php
│       ├── routes/
│       │   └── api.php
│       ├── docker-compose.yml
│       └── Dockerfile
│
└── frontend/
    └── src/
        └── app/
            ├── weather/
            │   ├── weather.ts
            │   ├── weather.html
            │   └── weather.scss
            └── app.ts
```

## 🌐 API Endpoints

### GET /api/weather/{city}

Recupera i dati meteo per una città specifica.

**Parametri:**
- `city` (string): Nome della città

**Risposta di esempio:**
```json
{
  "name": "Milano",
  "sys": {
    "country": "IT"
  },
  "main": {
    "temp": 22.5,
    "feels_like": 21.8,
    "temp_min": 20.0,
    "temp_max": 25.0,
    "humidity": 65,
    "pressure": 1013
  },
  "weather": [
    {
      "main": "Clear",
      "description": "cielo sereno",
      "icon": "01d"
    }
  ],
  "wind": {
    "speed": 3.5
  },
  "visibility": 10000
}
```

## 🎨 Funzionalità dell'Interfaccia

### Icone Meteo Dinamiche
L'applicazione mostra icone diverse in base alle condizioni meteo:
- ☀️ Sole (giorno) / 🌙 Luna (notte) per cielo sereno
- ☁️ Nuvole per cielo nuvoloso
- 🌧️ Pioggia
- ⛈️ Temporale
- ❄️ Neve
- 🌫️ Nebbia

### Card Dettagli
- **Umidità**: Percentuale di umidità dell'aria
- **Vento**: Velocità del vento in m/s
- **Pressione**: Pressione atmosferica in hPa
- **Visibilità**: Distanza di visibilità in km

## 📱 Responsive Design

L'applicazione è completamente responsiva e si adatta a:
- 📱 Mobile (< 480px)
- 📱 Tablet (480px - 768px)
- 💻 Desktop (> 768px)

## 🙏 Ringraziamenti

- [OpenWeatherMap](https://openweathermap.org/) per l'API meteo

---

Made with ❤️ using Laravel and Angular
