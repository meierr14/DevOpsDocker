'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
	res.send('Hello FS2023 DevOps Course!!! \nThis is the project created by meierr14');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
