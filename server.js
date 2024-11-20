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


mongoose.connect('mongodb+srv://admin:prasanna2703@cluster1.wzuur.mongodb.net/telecom?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.error('Failed to connect:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
