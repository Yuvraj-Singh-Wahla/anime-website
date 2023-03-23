const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

var data = null;

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb://localhost:27017/anime_website");

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

    
    data = await temp.find();

}

const app = express();
app.use(cors());

app.get('/home', (req, res) => {
    res.json(data);
});

app.get('/app2', (req, res) => {
    res.json(data[0].cards)
})

app.listen(3001, (err) => {
    console.log(err);
});