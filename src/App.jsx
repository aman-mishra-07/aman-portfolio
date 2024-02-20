import { Router, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"

function App() {

  return (
  <>
  <div className="w-full min-h-screen bg-zinc-800 text-zinc-100">
    <Navbar/>
    <Home/>
    <About/>
  </div>
  </>
  )
}

export default App
