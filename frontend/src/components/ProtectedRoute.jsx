/* eslint-disable no-unused-vars */
import { Navigate } from "react-router-dom"
import { jwtDecode } from "jwt-decode"
import api from "../api"
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../constants"
import { useState, useEffect } from 'react'

// Protected route component for only authorized users
function ProtectedRoute({children}) {
    // create state to track authorization status
    const [isAuthorized, setIsAuthorized] = useState(null)

}

export default ProtectedRoute