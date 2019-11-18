const express = require('express');
const connectDB = require('./config/db');

const app = express();

app.get('/', (req, res) => res.json({ msg: 'Contact Keeper API' }));

// All Routes Entry
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
