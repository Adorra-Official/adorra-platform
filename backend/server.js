const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/health', (_, res) => res.json({ ok: true, service: 'backend', ts: Date.now() }));
app.get('/', (_, res) => res.send('Adorra backend mock OK'));

app.listen(port, () => console.log(`Backend listening on ${port}`));
