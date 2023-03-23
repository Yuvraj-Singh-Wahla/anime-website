const mongoose = require('mongoose');

async function db_connect(db){
    await mongoose.connect(`mongodb://localhost:27017/${db}`);
    const cardSchema = new mongoose.Schema({
        title: String,
        desc: String,
        src: String,
        page: {
            title: String,
            desc: String,
            src: String
        },
        cards: [
            {
                title: String,
                desc: String,
                src: String
            }
        ]
    });

    const temp = new mongoose.model("temp", cardSchema);
    return temp;
}

module.exports = db_connect;