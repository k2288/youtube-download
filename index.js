const fs = require('fs');
const ytdl = require('ytdl-core');
const express = require("express")
const app = express();
const PORT = 80;
// 
// GET http://localhost:3000/download/book.png
//
app.get("/download", (req, res) => {
    ytdl('http://www.youtube.com/watch?v=aqz-KE-bpKQ')
        .pipe(fs.createWriteStream('video.mp4'));
    console.log('video.mp4')
    res.download("video.mp4");

});
app.listen(PORT, () => console.log("Server listening to port " + PORT))