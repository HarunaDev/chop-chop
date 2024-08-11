/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Order from "./pages/Order"
import Register from "./pages/Register"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"
import ProtectedRoute from "./components/ProtectedRoute"

// write logout function
function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

// write register and logout function
function RegisterAndLogout(){
  localStorage.clear()
  return <Register />
}

function App() {

  return (
    <>
      
    </>
  )
}

export default App
