'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('HI APS TEAM!! WELCOME TO GOOGLE OFFICE!! 23 OCTOBER 2025 - PHASE 3');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
