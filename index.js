const fs = require('fs');
const ytdl = require('ytdl-core');
const express = require("express")
const app = express();
const PORT = 3000;
// 
// GET http://localhost:3000/download/book.png
//
app.get("/download", (req, res) => {
    // ytdl.chooseFormat({
    //     quality:"small",

    // })
    const stream=ytdl('https://www.youtube.com/watch?v=nqye02H_H6I', {
    quality:'lowestvideo'
    })
    stream
    .pipe(fs.createWriteStream('video.mp4'))
    // .on("data",chunk=>{
    //     console.log('downloaded', chunk.length);
    // })
    .on("finish", () => {
        console.log('video downloaded successfully')
        res.download("video.mp4");
    })
    .on('error', (err) => {
        console.error(`Error downloading video:`, err);
    });
    // console.log('video.mp4')

});
app.listen(PORT, () => console.log("Server listening to port " + PORT))
