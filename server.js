const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve all static files from the zone-app directory
app.use(express.static(path.join(__dirname)));

// Fallback: serve index.html for any unmatched route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`\n✅  ZONE app running at: http://localhost:${PORT}\n`);
});
