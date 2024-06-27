const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL, { dbName: process.env.DB_NAME })
.then(() => console.log(`MongoDB Connected!`))
.catch(err => console.log(err));

process.on('SIGINT', async () => {
    await mongoose.connection.close()
    .then(() => console.log(`\nMongoDB connection closed!`))
    .catch(err => console.log(err));
    process.exit(0);
});