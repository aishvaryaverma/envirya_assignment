const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    mongoose.connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(res => console.log("database connected"))
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
    
    // try {
    //     mongoose.connect(db, {
    //         useNewUrlParser: true,
    //         useCreateIndex: true,
    //         useFindAndModify: false
    //     })
    //     console.log('mongoDB connected...');
    // } catch (err) {
    //     console.error(err);
    //     process.exit(1);
    // }
};

module.exports = connectDB;