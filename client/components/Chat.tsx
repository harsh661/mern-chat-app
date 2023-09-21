import { useEffect, useState } from "react"
import queryString from "query-string"
import { useLocation } from "react-router"
import {io, Socket} from "socket.io-client"

let socket: Socket

const Chat = () => {
  const location = useLocation()

  const [userName, setUserName] = useState("")
  const [roomId, setRoomId] = useState("")

  const ENDPOINT = "http://localhost:8000"

  useEffect(() => {
    const { name, roomId } = queryString.parse(location.search)

    socket = io(ENDPOINT)

    setUserName(name as string)
    setRoomId(roomId as string)

    socket.emit('join', { name, roomId })

    return () => {
      socket.emit('leave')

      socket.off()
    }
  }, [location.search, ENDPOINT])

  return <div>Chat</div>
}

export default Chat
