const mongoose = require('mongoose');


const Car = require('./Car');

const connectionString = 'mongodb://localhost:27017/carbicle';

//making promise for connection of the database,  when is connected it will be resolved

async function init() {
    try {
        mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database connected');
        mongoose.connection.on('error', (err) => {
            console.log('Database error');
            console.log(err);
        });
    } catch (err) {
        console.error('Error connecting to database');
        process.exit(1);
    }
}


module.exports = init;