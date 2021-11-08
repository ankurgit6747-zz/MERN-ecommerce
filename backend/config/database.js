const mongoose = require('mongoose');



const connectDatabase = () => {
    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((data) => {
        console.log(`Mongodb connected with server: ${data.connection.host}`);
    }).catch((error) => {
        console.log(`Error is: ${error}`);
    })
}

module.exports = connectDatabase;