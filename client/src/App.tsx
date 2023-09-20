import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Join from "../components/Join"
import Chat from "../components/Chat"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Join />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
