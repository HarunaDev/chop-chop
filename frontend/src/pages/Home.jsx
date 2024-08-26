import { useState, useEffect } from "react"
import api from "../api"
import NavbarDefault from "../components/NavBar"

function Home() {
    // state to hold user
    const [user, setUser] = useState("there")

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
        <NavbarDefault />
        <h1>Hello {user}</h1>
        </>
    )
}

export default Home