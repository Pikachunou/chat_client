const socket = io(); // connect to express' socket server
// const socket = io.connect('https://poke-chat.herokuapp.com/'); // connect to express' socket server

document.getElementById("send").addEventListener("click", event=>{
    const msg = (document.getElementById("input").value)
    socket.emit("send", msg)
})

socket.on("broadcast", msg => 
  alert(`Got message: ${msg}`)
)