import NavBar from "../components/NavBar"
import { useState, useEffect } from "react"
import api from "../api"
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom'

function Order() {
    // state to hold user
    const [user, setUser] = useState(null)

    useEffect(() => {
        getUser()
    }, [])

    // function to make api call and get user
    const getUser = () =>{
        api
        .get("/api/user/")
        .then((res) => res.data)
        .then((data) => {
            setUser(data.username)
        })
        .catch((err) => alert(err))
    }

    return (
        <>
            <NavBar user={user} url="/" text="Home" />
        </>
    )
}

export default Order