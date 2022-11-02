require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const musicRouter = require('routes/musicRouter')
const app = express();
const port = 3000;

mongoose.connect(process.env.DATABASE_URL, {userNewUrlParser: true});
const db = mongoose.connection

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());

app.use('/music', musicRouter);

app.listen(port, () => console.log(`Server Started on Port ${port}`));
