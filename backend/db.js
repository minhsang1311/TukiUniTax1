const mongoose = require('mongoose');

const url ='mongodb+srv://sangnnmsec:minh1sang1@taxtuki.469o0bk.mongodb.net/?retryWrites=true&w=majority&appName=taxTuki'
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(url, {
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

module.exports = connectDB;
