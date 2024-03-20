// mongo.js

const { MongoClient } = require('mongodb');

// Connection URI
const uri = process.env.MONGODB_URL

// MongoDB Options
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

// Function to connect to MongoDB
async function connectToDatabase() {
    const client = new MongoClient(uri, options);

    try {
        // Connect to MongoDB
        await client.connect();
        console.log('Connected to MongoDB');

        // Return the client
        return client;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}

module.exports = { connectToDatabase };
