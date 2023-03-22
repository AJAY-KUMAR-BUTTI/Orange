const mongoose = require('mongoose');

async function initDB() {
    try {
       await mongoose.connect(process.env.MONGO_URL, { dbName : 'Orange' })
       console.log('connected to DB Successfully');
    } catch(err) {
        console.log("Error connected to DB", err);
        process.exit()
    }
}

module.exports = {
    initDB
}