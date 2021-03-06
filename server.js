const express = require('express');
const connectDb = require('./config/db');
const path = require('path');
const app = express();

// Connect Database
connectDb();

// Init Middleware
app.use(express.json({ extended: false }));

// Routes
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/time-entry', require('./routes/api/time-entry'));

// Serving static assets in production
if(process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
    
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// Listening for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));