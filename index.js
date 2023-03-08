const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const port = 4000;
const app = express();

require('../Challenge5/dataBase/connect')
app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json({ limit: "52428800" }));
app.use(bodyParser.urlencoded({ limit: "52428800", extended: true, parameterLimit: 50000 }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api', require('./routes/uploading'))
app.use('/api/v1/uploads', express.static(path.join(__dirname, '/Uploads')));

app.listen(port, () => {
    console.log('App is running on port 4000')
})