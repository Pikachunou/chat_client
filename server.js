const express = require("express")
const app = express()

const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static("src"))
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/src/index.html")
})

http.listen(process.env.PORT || 3000, console.log("Listening"))