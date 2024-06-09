require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');
const cors= require('cors');
// Default configuration looks like
// {
//     "origin": "*",
//     "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
//     "preflightContinue": false,
//     "optionsSuccessStatus": 204
//   }

const corsOptions = {
    origin: '*',
}

app.use(cors(corsOptions));
app.use(express.static('public'));
const connectDB = require('./config/db');
connectDB();





app.set('views',path.join(__dirname,'/views'));
app.set('view engine','ejs');
app.use(express.json());

// Routes 
app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));

app.listen(PORT, console.log(`Listening on port ${PORT}.`));