const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Body Parser Middleware
app.use(bodyParser.json());

// DB Config/URI
const db = require('../Learn-The-MERN-Stack/config/keys').mongoURI;

// Connect to MongoDB
mongoose
    .connect(db)
    .then(() => { console.log('MongoDB Connected') })
    .catch(err => console.log(err));

const port = process.env.PORT || 3500;

app.listen(port, () => console.log(`Server started on port ${port}`));
