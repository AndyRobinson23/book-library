const express = require('express');
const readerRouter = require('./controllers/reader');
const app = express();

app.use(express.json());

app.post('/reader', readerRouter);

module.exports = app;