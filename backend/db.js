const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_CONNECT_URI, {
        });
        console.log(`MongoDB Connect Success`);
    } catch (error) {
        console.log(`MongoDB Connect Failed`)
    }
};

module.exports = connectDB;
