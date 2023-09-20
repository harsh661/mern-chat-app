import { useState } from "react"
import { Link } from "react-router-dom"

const Join = () => {
  const [userName, setUserName] = useState<string>("")
  const [roomId, setRoomId] = useState<string>("")

  return (
    <div className="main_container">
      <div className="join_form">
        <h1 className="heading">Join a chat</h1>
        <div className="input_wrapper">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            size={0}
            className="input"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="input_wrapper">
          <label htmlFor="room">RoomId</label>
          <input
            id="room"
            size={0}
            className="input"
            type="text"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
          />
        </div>

        <Link
          onClick={(event) =>
            !userName || !roomId ? event.preventDefault() : null
          }
          to={`/chat?name=${userName}&roomId=${roomId}`}
          style={{ width: "100%" }}
        >
          <button className="button">Join now</button>
        </Link>
      </div>
    </div>
  )
}

export default Join
