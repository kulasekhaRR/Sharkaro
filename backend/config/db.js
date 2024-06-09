const mongoose = require('mongoose');

function connectDB() {
    mongoose.connect(process.env.MONGO_CONNECTION_URL);
    
    const connection = mongoose.connection;

    connection.on('error', (err) => {
        console.error('Database connection error:', err);
    });

    connection.once('open', () => {
        console.log('Database connected 🥳🥳🥳🥳');
    });
}

module.exports = connectDB;
