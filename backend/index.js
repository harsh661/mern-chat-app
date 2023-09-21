const express = require("express")
const cors = require("cors")
const socketio = require("socket.io")
const http = require("http")
const router = require("./router")
const app = express()

app.use(cors({ origin: "http://localhost:5173" }))

const server = http.createServer(app)
const io = socketio(server)

app.use(router)

io.on("connection", (socket) => {
  console.log("A user connected")

  socket.on("join", ({ name, roomId}, callback) => {
    console.log({name, roomId})
  })

  socket.on("leave", () => {
    console.log("User left")
  })
})

server.listen(8000, () => {
  console.log("Server started")
})
