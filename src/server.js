const express = require('express');
const mongoose = require('mongoose')
const connectionString = 'mongodb+srv://rudinilly:rudinilly@cluster0.uqwtu.mongodb.net/?retryWrites=true&w=majority'
const cors = require('cors');

mongoose.connect(connectionString);

const routes = require('./routes');




const server = express();

server.use(cors());
server.use(express.json())
server.use(routes);

server.listen(3333);