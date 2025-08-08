const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (_, res) => res.send(`<h1>Adorra frontend mock OK</h1><p><a href="/api/health">/api/health</a> via proxy</p><p><a href="/n8n">/n8n</a> via proxy</p>`));

app.listen(port, () => console.log(`Frontend listening on ${port}`));
