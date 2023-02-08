const { Client } = require('pg'); // using pg lib to connect to a PostgreSQL db with class Client

// returns a promise that connects to the db
const connectDB = async () => {
    try {
        const client = new Client({
            connectionString: process.env.DATABASE_URI,
        });

        await client.connect();

        console.log('PostgreSQL connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
