//main server 

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


mongoose.connect('mongodb://127.0.0.1:27017/Customers', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Failed to connect to MongoDB', error));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
