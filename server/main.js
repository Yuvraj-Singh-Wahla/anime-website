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

    const opm = new temp({
        title: "Naruto",
        desc: "Quis ut id culpa sit sit officia consectetur et id eiusmod.",
        src: "https://www.pngmart.com/files/6/Attack-On-Titan-PNG-File-1.png",
        page: {
            title: "Naruto",
            desc: "Quis ut id culpa sit sit officia consectetur et id eiusmod.",
            src: "https://www.pngmart.com/files/6/Attack-On-Titan-PNG-File-1.png"
        },
        cards: [
            {
                title: "One Punch Man",
                desc: "Quis ut id culpa sit sit officia consectetur et id eiusmod.",
                src: "https://www.pngmart.com/files/13/One-Punch-Man-Saitama-PNG-Photos.png"
            },
            {
                title: "One Punch Man",
                desc: "Quis ut id culpa sit sit officia consectetur et id eiusmod.",
                src: "https://www.pngmart.com/files/13/One-Punch-Man-Saitama-PNG-Photos.png"
            },
            {
                title: "One Punch Man",
                desc: "Quis ut id culpa sit sit officia consectetur et id eiusmod.",
                src: "https://www.pngmart.com/files/13/One-Punch-Man-Saitama-PNG-Photos.png"
            },
            {
                title: "One Punch Man",
                desc: "Quis ut id culpa sit sit officia consectetur et id eiusmod.",
                src: "https://www.pngmart.com/files/13/One-Punch-Man-Saitama-PNG-Photos.png"
            },
            {
                title: "One Punch Man",
                desc: "Quis ut id culpa sit sit officia consectetur et id eiusmod.",
                src: "https://www.pngmart.com/files/13/One-Punch-Man-Saitama-PNG-Photos.png"
            },
            {
                title: "One Punch Man",
                desc: "Quis ut id culpa sit sit officia consectetur et id eiusmod.",
                src: "https://www.pngmart.com/files/13/One-Punch-Man-Saitama-PNG-Photos.png"
            }
        ]
    });
    // await opm.save();
    data = await temp.find();
    // console.log(data);

}

const app = express();
app.use(cors());

app.get('/mkc', (req, res) => {
    res.json(data);
});

app.get('/app2', (req, res) => {
    res.json(data[0].cards)
})

app.listen(3001, (err) => {
    console.log(err);
});