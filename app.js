const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const residentsRouter = require('./routes/residents');

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use('/residents', residentsRouter);

module.exports = app;
