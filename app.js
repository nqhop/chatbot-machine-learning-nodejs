const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const clientRoutes = require('./routes/client');

app.use(express.static(path.join(__dirname, 'public')));

app.use(clientRoutes);
app.use(adminRoutes);

app.listen(3000);