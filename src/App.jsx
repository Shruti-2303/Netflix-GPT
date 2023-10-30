// import Body from "./components/Body"
import Login from "./components/Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./components/Browse";
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login/>
    },
    {
      path: "/browse",
      element: <Browse/>
    }
  ])
  return (
    <RouterProvider router={appRouter}>
        <Login/>
        <Browse/>
      </RouterProvider>
  )
}

export default App
