const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        mongoose.connect( process.env.MONGODB_CNN, {
            // useNewUrlParser: true,
            // ueNewUnifiedTopology: true,
            // useCreateIndex: true,
            // useFindAndModify:false
        });
        console.log('Database connected');
    } catch {
        console.log('error');
        throw new Error('An error occurred while trying to connect to the database.')
    }
}

module.exports = {
    dbConnection
}

