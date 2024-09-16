// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Route de base
app.get('/', (req, res) => {
    res.send('Bienvenue ');
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
