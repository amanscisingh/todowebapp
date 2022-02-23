const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config({ path: './config/.env' })
const cors = require('cors');

const app = express();

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
}).catch(err => {console.error(err)});

app.use(bodyParser.json());
app.use(cors());
app.use('/', require('./api/index'));


