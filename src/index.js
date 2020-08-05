const socket = io.connect('http://localhost:3000'); // connect to express' socket server

document.getElementById("send").addEventListener("click", event=>{
    const msg = (document.getElementById("input").value)
    socket.emit("send", msg)
})