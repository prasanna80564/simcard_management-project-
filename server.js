const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/telecom')
    .then(() => console.log('connected to MongoDB'))
    .catch(err => console.log('failed to connect:',err));


const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log(`server is running on port ${PORT}`);
}
);