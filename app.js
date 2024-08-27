require('dotenv').config();
const express = require('express');
const layout = require('express-ejs-layouts');
const connectDB = require('./server/config/db');

const app = express(); 
const port = process.env.port;

app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use(layout);
app.use(express.static('public'));
app.use('/', require('./server/routes/main'));
connectDB();

app.listen(port, () => {
    console.log(`Serving on port ${port}`);
});