/* eslint-disable no-unused-vars */
import { Navigate } from "react-router-dom"
import { jwtDecode } from "jwt-decode"
import api from "../api"
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../constants"
import { useState, useEffect } from 'react'

// Protected route component for only authorized users
// eslint-disable-next-line react/prop-types
function ProtectedRoute({children}) {
    // create state to track authorization status
    const [isAuthorized, setIsAuthorized] = useState(null)

    // until state is not null, render this div 
    if (isAuthorized === null) {
        return <div>Loading...</div>
    }

    // return children if authorized or navigate to login page
    return isAuthorized ? children : <Navigate to="/login" />

}

export default ProtectedRoute