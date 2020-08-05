const express = require("express")
const app = express()

const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static("src"))
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/src/index.html")
})

// handle socket connection to express server
io.on("connect", socket=> {
    // handle socket when receiving a message from client
    socket.on("send", msg=> {
        // broadcast to all other clients
        console.log(`Message: ${msg}`)
        io.emit("broadcast", msg)
    })
})
http.listen(process.env.PORT || 3000, console.log("Listening"))