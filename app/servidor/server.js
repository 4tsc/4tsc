const express = require('express');
const https = require('https');
const fs = require('fs');
const scrapeNews = require('./scrapeNews');
const scrapeEvents = require('./scrapeEvents');
const cors = require('cors');
const scrapeNoticiass = require('./scrapeNoticiass');
const scrapeNewss = require('./scrapeNewss');
const scrapeEventss = require('./scrapeEventss');

// Cargar certificados SSL de Let's Encrypt
const privateKey = fs.readFileSync('/etc/letsencrypt/archive/magicarduct.online/privkey1.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/archive/magicarduct.online/fullchain1.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/archive/magicarduct.online/chain1.pem', 'utf8');

const credentials = { key: privateKey, cert: certificate, ca: ca };

const app = express();
const port = 3001;

// Middleware
const allowedOrigins = [
  'http://localhost:3001',
  'http://magicarduct.online',
  'http://localhost:3000',
  'http://localhost:8081', // Tu máquina local
  'http://186.64.122.218:3000',  // IP del host remoto
  'http://186.64.122.218', // Otro dominio permitido
  'https://localhost:3001',
  'https://magicarduct.online',
  'https://localhost:3000',
  'https://localhost:8081', // Tu máquina local
  'https://186.64.122.218:3000',  // IP del host remoto
  'https://186.64.122.218', // Otro dominio permitido
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('No permitido por CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200,
}));


app.get('/api/news', async (req, res) => {
  try {
    const newsItems = await scrapeNews();
    res.json(newsItems);
  } catch (error) {
    console.error('Error fetching the news:', error.message);
    res.status(500).send('Error fetching the news');
  }
});

app.get('/api/events', async (req, res) => {
  try {
    const events = await scrapeEvents();
    res.json(events);
  } catch (error) {
    console.error('Error fetching the events:', error.message);
    res.status(500).send('Error fetching the events');
  }
});

app.get('/api/news2', async (req, res) => {
  try {
    const newsItems = await scrapeNewss();
    res.json(newsItems);
  } catch (error) {
    console.error('Error fetching the news:', error.message);
    res.status(500).send('Error fetching the news');
  }
});

app.get('/api/events2', async (req, res) => {
  try {
    const events = await scrapeEventss();
    res.json(events);
  } catch (error) {
    console.error('Error fetching the events:', error.message);
    res.status(500).send('Error fetching the events');
  }
});

app.get('/api/noticias2', async (req, res) => {
  try {
    const newsItems = await scrapeNoticiass();
    res.json(newsItems);
  } catch (error) {
    console.error('Error fetching news from Noticias2:', error.message);
    res.status(500).send('Error fetching the news');
  }
});

// Crear el servidor HTTPS
https.createServer(credentials, app).listen(port, () => {
  console.log(`Server is running on https://magicarduct.online:${port}`);
});
