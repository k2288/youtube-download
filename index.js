const fs = require('fs');
const ytdl = require('ytdl-core');
const express = require("express")
const app = express();
const PORT = 3000;
// 
// GET http://localhost:3000/download/book.png
//
app.get("/download", (req, res) => {
    const stream=ytdl('http://www.youtube.com/watch?v=aqz-KE-bpKQ', {

    })
    stream
    .pipe(fs.createWriteStream('video.mp4'))
    // .on("data",chunk=>{
    //     console.log('downloaded', chunk.length);
    // })
    .on("finish", () => {
        console.log('video downloaded successfully')
    })
    .on('error', (err) => {
        console.error(`Error downloading video:`, err);
    });
    // console.log('video.mp4')
    // res.download("video.mp4");

});
app.listen(PORT, () => console.log("Server listening to port " + PORT))
