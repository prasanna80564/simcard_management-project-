const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const customerRoutes = require('./routes/customerRoutes'); 

const app = express();


app.use(express.static(path.join(__dirname, 'public')));


app.use(cors());
app.use(bodyParser.json());


app.use('/customers', customerRoutes);


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
}); 


mongoose.connect('mongodb://localhost:27017/telecom')
    .then(() => console.log('connected to MongoDB'))
    .catch(err => console.log('failed to connect:', err));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
